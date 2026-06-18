# kirangadhave.me

Personal website built with [Astro](https://astro.build) and deployed as a static site to GitHub Pages. A markdown-driven hub (Home, Blog, Projects, Publications, About, Resume) with an interactive [marimo](https://marimo.io)-powered blog and LLM-friendly discoverability (sitemap, RSS, `llms.txt`, per-post raw markdown, JSON-LD).

## Tech stack

- **Astro 6** — static site generator
- **Tailwind v4** (`@tailwindcss/vite`) + `@tailwindcss/typography`
- **MDX** (`@astrojs/mdx`) for blog posts, **sitemap** and **RSS** integrations
- **Fontsource** variable fonts (Inter, JetBrains Mono)
- **marimo** for interactive notebook islands, built via a `uv`-run Python script

## Prerequisites

- Node.js **24+**
- [pnpm](https://pnpm.io)
- [uv](https://docs.astral.sh/uv/) — only needed to build the marimo islands

## Getting started

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server at http://localhost:4321
pnpm build        # build the static site to dist/
pnpm preview      # serve the production build locally
```

The marimo island pipeline runs as a `prebuild` hook before `pnpm build`; it regenerates the embedded notebook HTML from the `.py` sources in `notebooks/`.

## Folder structure

```
astro.config.mjs            # integrations, site URL, markdown config
src/
  consts.ts                 # site metadata, nav, social links
  content.config.ts         # blog collection schema (content layer)
  styles/global.css         # Tailwind v4 entry + design tokens
  layouts/
    BaseLayout.astro        # html shell, head, no-flash theme, fonts
    PostLayout.astro        # blog article wrapper
  components/
    Head.astro              # SEO/meta/OG + canonical
    JsonLd.astro            # schema.org JSON-LD
    Nav.astro / Footer.astro / ThemeToggle.astro
    MarimoIsland.astro      # inline reactive cells
    NotebookEmbed.astro     # full-notebook WASM iframe
    MolabBadge.astro        # "Open in molab" badge
  data/                     # typed publications + projects
  content/blog/             # *.mdx posts
  pages/                    # routes (home, blog, projects, publications, about, resume)
                            # plus rss.xml, llms.txt, sitemap endpoints
  generated/islands/        # build output: per-notebook island HTML (gitignored)
notebooks/                  # marimo .py sources
scripts/build-islands.py    # uv script: notebooks -> island HTML
public/                     # static assets, robots.txt, CNAME
```

## Deployment

The site deploys to GitHub Pages on push to `main`. The custom domain `kirangadhave.me` is configured via `public/CNAME`.
