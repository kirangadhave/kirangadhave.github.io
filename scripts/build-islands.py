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
from pathlib import Path

from marimo import MarimoIslandGenerator

NOTEBOOKS = Path("notebooks")
OUT = Path("src/generated/islands")


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


async def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for nb in sorted(NOTEBOOKS.glob("*.py")):
        await build_one(nb)


if __name__ == "__main__":
    asyncio.run(main())
