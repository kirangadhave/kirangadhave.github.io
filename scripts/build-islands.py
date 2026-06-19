# /// script
# requires-python = ">=3.11"
# dependencies = ["marimo", "altair", "pandas"]
# ///
"""Compile each notebook in ``notebooks/`` to a marimo island fragment.

For every ``notebooks/<slug>.py`` this writes two HTML fragments under
``src/generated/islands/``: ``<slug>.head.html`` (the islands runtime
script/style tags, destined for ``<head>``) and ``<slug>.body.html`` (the
reactive ``<marimo-island>`` markup). The Astro ``MarimoIsland`` component
inlines these at build time.

``render_head`` embeds the marimo version that built the fragment in the CDN
URL, so the runtime and generated markup always agree without a separate pin.
"""

import asyncio
import json
import subprocess
import sys
from pathlib import Path

from marimo import MarimoIslandGenerator

NOTEBOOKS = Path("notebooks")
OUT = Path("src/generated/islands")

# Slugs to additionally export as standalone WASM notebooks for the
# NotebookEmbed component (whole-notebook iframe). Islands are the default
# mechanism, so only notebooks meant to be shown in full are listed here —
# the WASM export is heavier than an island fragment and ships its own runtime.
EMBEDS = {"hello-marimo"}
EMBED_OUT = Path("public/notebooks")


async def build_one(nb: Path) -> None:
    generator = MarimoIslandGenerator.from_file(str(nb), display_code=False)
    # Each notebook becomes its own island app keyed by slug. The frontend
    # groups <marimo-island> elements by data-app-id and runs one kernel per
    # group; without a unique id every notebook would default to "main" and
    # their cells would merge into one broken dependency graph on a shared page.
    # from_file bakes the app id into each stub at creation, so override both.
    generator._app_id = nb.stem
    for stub in generator._stubs:
        stub._app_id = nb.stem
    await generator.build()
    # include_init_island=False: the global "Initializing..." loader island is
    # static and not auto-removed once the kernel is ready, so it lingers over
    # the live notebook. Cells are pre-rendered at build time, so dropping it
    # lets the static output show immediately and upgrade in place once Pyodide
    # boots (progressive enhancement) rather than hiding behind a spinner.
    head = generator.render_head()
    body = generator.render_body(include_init_island=False)
    # Per-cell fragments let a page place a notebook's cells at separate DOM
    # positions (prose between widgets). They share one app-id, so the frontend
    # still groups them into a single kernel — the supported way to get multiple
    # island blocks on one page (multiple independent notebooks are not, since
    # the Pyodide RuntimeContext is a per-page singleton).
    cells = [stub.render() for stub in generator._stubs]
    (OUT / f"{nb.stem}.head.html").write_text(head, encoding="utf-8")
    (OUT / f"{nb.stem}.body.html").write_text(body, encoding="utf-8")
    (OUT / f"{nb.stem}.cells.json").write_text(json.dumps(cells), encoding="utf-8")
    print(f"built island: {nb.stem} ({len(cells)} cells)")


def outputs_for(nb: Path) -> list[Path]:
    outs = [
        OUT / f"{nb.stem}.head.html",
        OUT / f"{nb.stem}.body.html",
        OUT / f"{nb.stem}.cells.json",
    ]
    if nb.stem in EMBEDS:
        outs.append(EMBED_OUT / nb.stem / "index.html")
    return outs


def is_stale(nb: Path) -> bool:
    """A notebook needs rebuilding if any output is missing or older than the
    source — or older than this script, since changing the build logic should
    regenerate every fragment."""
    outs = outputs_for(nb)
    if not all(out.exists() for out in outs):
        return True
    newest_input = max(nb.stat().st_mtime, Path(__file__).stat().st_mtime)
    return any(out.stat().st_mtime < newest_input for out in outs)


def export_wasm(nb: Path) -> None:
    out = EMBED_OUT / nb.stem
    subprocess.run(
        [
            sys.executable,
            "-m",
            "marimo",
            "export",
            "html-wasm",
            str(nb),
            "-o",
            str(out),
            "--mode",
            "run",
            "-f",
        ],
        check=True,
    )
    print(f"exported wasm notebook: {nb.stem} -> {out}/")


async def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    force = "--force" in sys.argv
    for nb in sorted(NOTEBOOKS.glob("*.py")):
        if not force and not is_stale(nb):
            print(f"up to date: {nb.stem}")
            continue
        await build_one(nb)
        if nb.stem in EMBEDS:
            export_wasm(nb)


if __name__ == "__main__":
    asyncio.run(main())
