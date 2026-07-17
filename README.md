# BillClick

Hebrew marketing site for BillClick (ניהול ועד בית) — VaadBot, Alexy, VaadBit.

**Live:** [https://billclick.co.il](https://billclick.co.il)

## Stack

- **SvelteKit** + **Svelte 5** (runes)
- **@sveltejs/adapter-static** → GitHub Pages
- Shared CSS in `src/lib/styles/site.css`
- Static assets in `static/` (incl. `CNAME`)

## Develop

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

Output goes to `build/` (prerendered HTML for `/` and `/vaadbot/`).

## Deploy (GitHub Pages)

Workflow: `.github/workflows/deploy.yml` builds and deploys `build/` on push to `master`/`main`.

In repo **Settings → Pages**, set source to **GitHub Actions** (not “Deploy from branch”). Custom domain stays `billclick.co.il` via `static/CNAME`.

## Project layout

```
src/routes/           # pages (+page.svelte)
src/lib/components/   # Header, FAQ, hero, etc.
src/lib/actions/      # scrollReveal
src/lib/data/         # FAQ, nav, JSON-LD
static/assets/        # images, legal PDFs
```

## Founders

- Yehonatan Yifrach — Founder & CEO/CFO
- Yaakov Shoshani — Founder & COO

© 2026 BillClick
