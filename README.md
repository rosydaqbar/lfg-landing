# LFG.ink

Landing page for **LFG**, a small independent studio building software, tools, and experiments.

Built with [Astro](https://astro.build). Static output, no backend.

## Getting started

Requires Node.js 22.23.4 or newer (Astro 7).

```bash
npm install
npm run dev       # http://localhost:4321
```

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload      |
| `npm run build`   | Build the static site into `dist/`        |
| `npm run preview` | Serve the production build locally        |

## Editing content

Most copy and links live in one file: **`src/data/site.ts`**.

- `contactEmail`: where every **Contact Us** button sends mail
- `mailSubject` / `mailBody`: the prefilled email people start from
- `github` and `discord`: footer links (Discord is hidden while `null`)
- `acronyms`: the rotating meanings of "LFG" under the hero title
- `products`: name, description, link, button label, and the `soon` flag for each product card

Section copy (hero, How We Build, contact) is in the matching component under `src/components/`.

## Project structure

```
src/
├── assets/            Watercolor illustrations (optimized to AVIF/WebP at build)
├── components/
│   ├── Nav.astro          Floating pill navigation
│   ├── Hero.astro         Hero: stars, shooting stars, Saturn ring on the wordmark
│   ├── Ring.astro         Canvas layers for the ring
│   ├── HowWeBuild.astro   Three-step process
│   ├── Products.astro     Product card grid
│   ├── previews/          Animated SVG scene for each product
│   ├── Contact.astro      Call-to-action panel
│   └── Footer.astro       Daylight footer revealed at the end of the page
├── data/site.ts       Site content and links
├── layouts/Base.astro HTML shell
├── pages/index.astro  The page
├── scripts/motion.ts  Smooth scrolling (Lenis) and section reveals
└── styles/global.css  Tokens, buttons, and the reveal system
```

## Motion and accessibility

The page has smooth scrolling, section reveals, twinkling and shooting stars, a hover ring on the wordmark, and looping product scenes. All of it respects `prefers-reduced-motion`: smooth scrolling and the star field are turned off, and the remaining motion falls back to simple fades or still frames.

## Deploying

The build is plain static files in `dist/`, so any static host works. Vercel, Netlify, and Cloudflare Pages detect Astro automatically (build command `npm run build`, output directory `dist`).

If the site isn't served from `https://lfg.ink`, update `site` in `astro.config.mjs`.
