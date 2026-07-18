# BillClick

[![Website](https://img.shields.io/badge/website-billclick.co.il-0071e3)](https://billclick.co.il)
[![Deploy to GitHub Pages](https://github.com/D371L/billclick.co.il/actions/workflows/deploy.yml/badge.svg)](https://github.com/D371L/billclick.co.il/actions/workflows/deploy.yml)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2-ff3e00?logo=svelte&logoColor=white)](https://svelte.dev/docs/kit)

The official Hebrew-language website for **BillClick**, a technology company building digital solutions for managing shared residential buildings in Israel.

The website introduces BillClick's services and products:

- **VaadBot** — a building-management application for committees, residents, and service providers.
- **Alexy** — an AI-powered digital assistant for day-to-day building management.
- **VaadBit** — a payment interface for collecting building committee fees.

**Production:** [https://billclick.co.il](https://billclick.co.il)

## Features

- Native right-to-left Hebrew interface
- Responsive layouts for desktop and mobile
- Pre-rendered static pages with trailing-slash URLs
- Reusable Svelte components for navigation, FAQ, statistics, store links, and shared UI
- Structured data (JSON-LD), Open Graph metadata, sitemap, and web manifest
- Scroll-reveal animations and animated statistics
- App Store and Google Play links
- Automated deployment to GitHub Pages

## Technology

- [Svelte 5](https://svelte.dev/) with runes
- [SvelteKit](https://svelte.dev/docs/kit)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static)
- ESLint and Prettier
- GitHub Actions and GitHub Pages

## Pages

| Route       | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| `/`         | BillClick company website, services, FAQ, suppliers, and contact information |
| `/vaadbot/` | Product page for VaadBot, Alexy, and VaadBit                                 |

All routes are pre-rendered during the build. The generated site is written to `build/`.

## Local development

### Requirements

- Node.js 22 or newer
- npm

### Setup

```bash
git clone https://github.com/D371L/billclick.co.il.git
cd billclick.co.il
npm ci
npm run dev
```

Vite prints the local development URL after startup.

To expose the development server to other devices on the local network:

```bash
npm run dev -- --host
```

## Available commands

| Command               | Purpose                                  |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start the development server             |
| `npm run build`       | Generate the production site in `build/` |
| `npm run preview`     | Preview the production build locally     |
| `npm run check`       | Run Svelte and TypeScript diagnostics    |
| `npm run check:watch` | Run diagnostics in watch mode            |
| `npm run lint`        | Check formatting and lint the project    |
| `npm run format`      | Format the project with Prettier         |

Before submitting changes, run:

```bash
npm run check
npm run lint
npm run build
```

## Project structure

```text
.
├── .github/workflows/       # GitHub Pages deployment
├── src/
│   ├── lib/
│   │   ├── actions/         # Reusable Svelte actions
│   │   ├── components/      # Shared UI components
│   │   ├── data/            # Navigation, FAQ, and structured data
│   │   └── styles/          # Global design system and page styles
│   ├── routes/
│   │   ├── +page.svelte     # Homepage
│   │   └── vaadbot/         # Product page
│   ├── app.html             # HTML document template
│   └── app.d.ts             # Application type declarations
├── static/
│   ├── assets/              # Images, icons, and documents
│   ├── CNAME                # GitHub Pages custom domain
│   ├── manifest.json        # Web app manifest
│   └── sitemap.xml          # Search engine sitemap
├── vite.config.ts           # SvelteKit and static adapter configuration
└── package.json
```

## Content and styling

- Page content is located in `src/routes/`.
- Shared navigation, FAQ content, and JSON-LD are maintained in `src/lib/data/site.ts`.
- Reusable interface elements are in `src/lib/components/`.
- Global styles and responsive rules are in `src/lib/styles/site.css`.
- Public images and downloadable documents belong in `static/assets/`.

Use root-relative paths for public assets, for example:

```svelte
<img src="/assets/example.webp" alt="תיאור התמונה" />
```

Because the site is Hebrew-first, new pages should preserve `lang="he"` and right-to-left layout behavior. Images should include meaningful Hebrew alternative text.

## Deployment

Deployment is handled by `.github/workflows/deploy.yml`.

Every push to `master` or `main`:

1. Installs dependencies with `npm ci`.
2. Builds the pre-rendered website.
3. Verifies the generated homepage, `.nojekyll`, `CNAME`, and Hebrew markup.
4. Uploads `build/` as a GitHub Pages artifact.
5. Deploys the artifact to the production Pages environment.

The repository's Pages source must remain set to **GitHub Actions**. The custom domain is configured through `static/CNAME`, and `static/.nojekyll` prevents GitHub Pages from processing the generated files with Jekyll.

## SEO and public files

When adding or removing public routes:

- Update `static/sitemap.xml`.
- Add route-specific title, description, canonical URL, and social metadata.
- Keep structured data in `src/lib/data/site.ts` accurate.
- Confirm that all canonical and asset URLs use `https://billclick.co.il`.

## Organization

BillClick was founded by:

- **Yehonatan Yifrach** — Founder & CEO/CFO
- **Yaakov Shoshani** — Founder & COO

---

© 2026 BillClick. All rights reserved.
