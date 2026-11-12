# DEL-BOY® website

Four-page static marketing site for the DEL-BOY® iPhone app, built with [Eleventy](https://www.11ty.dev/) and hosted on Cloudflare Pages. No server, database or login.

| Route | Source file |
|---|---|
| `/` Home | `src/index.md` |
| `/support/` | `src/support.md` |
| `/privacy/` (incl. `#cookies`) | `src/privacy.md` |
| `/terms/` | `src/terms.md` |

**Editing content?** See [EDITING.md](EDITING.md). **What's still needed before launch?** See [LAUNCH-INPUTS.md](LAUNCH-INPUTS.md).

## Run locally

```bash
npm install
npm start              # preview build at http://localhost:8080 (shows draft content)
npm run build:prod     # production build into _site/ (draft content removed)
```

Requires Node 20+ (`.nvmrc` pins 22).

## Preview vs production

`src/_data/build.js` decides which build is running:

- **Production** — Cloudflare builds the `main` branch (or `SITE_ENV=production` locally). Draft copy, illustrative app screens, unverified company details and draft legal text are left out. `robots.txt` allows indexing.
- **Preview** — every other branch/pull request and local dev. Shows a "Preview" bar, draft content and illustrative screens; adds `noindex` and a blocking `robots.txt`. `_headers` also sends `X-Robots-Tag: noindex` on all `*.pages.dev` hostnames.

## Project structure

```
src/_data/site.json        ← App Store link, launch status, emails, company details, form, legal approval flags
src/_data/build.js         ← preview/production switch (no edits needed)
src/_includes/base.njk     ← page shell, meta tags
src/_includes/home.njk     ← homepage layout (sections A–F)
src/_includes/page.njk     ← Support / Privacy / Terms layout
src/_includes/partials/    ← header, footer, store badge/status, app screens, preview mock screens
src/assets/css/site.css    ← all styles; colours and fonts in :root
src/assets/js/site.js      ← menu, phone slideshow, reveals, contact form (no libraries)
src/assets/img/            ← logos, icons, share image, screenshots (add to img/screens/)
src/assets/fonts/          ← self-hosted Bricolage Grotesque + Instrument Sans (OFL)
scripts/make-icons.cjs     ← regenerates favicon, apple-touch-icon, og-image.jpg
scripts/test.cjs           ← smoke test (status, one H1, alt text, no sideways scroll, JS errors)
```

## Cloudflare Pages setup

Workers & Pages → Create → Pages → Connect to Git → choose this repo.

| Setting | Value |
|---|---|
| Framework preset | Eleventy |
| Build command | `npm run build` |
| Build output directory | `_site` |
| Production branch | `main` |
| Environment variable | `NODE_VERSION` = `22` |

Preview deployments are created automatically for every other branch and pull request.

**Custom domain:** Pages project → Custom domains → add `del-boy.com`, then add `www.del-boy.com` and set a redirect rule from `www` to the apex so there's one canonical host. If `del-boy.com` already handles email, **keep the existing MX, SPF, DKIM and DMARC records** when changing DNS, and send a test email to the support inbox afterwards.

## Testing

```bash
npx serve _site -l 8088 &          # or any static server
node scripts/test.cjs http://localhost:8088 ./shots
```

Then manually check on a real iPhone (Safari) and Android (Chrome): menu, FAQ, phone screen controls, form, App Store link.

## App Store Connect URLs (once production is live)

- Support URL: `https://del-boy.com/support/`
- Privacy Policy URL: `https://del-boy.com/privacy/`

## Assets used

| Asset | File | Source |
|---|---|---|
| Logo, light surfaces | `logo-white-bg.svg` (red on white) | DEL-BOY-LOGO.zip |
| Logo, dark surfaces | `logo-transparent.svg` (white) | DEL-BOY-LOGO.zip |
| App icon | `icon-red.svg`; `icon-white.svg` (icon-red with red square removed) | DEL-BOY-LOGO.zip |
| Also supplied, unused | `logo-red.svg`, AI/EPS/PDF masters | DEL-BOY-LOGO.zip |
| Brand red | `#D63832` (sampled from the SVGs); `#B0241E` for text/links | Derived |
| Fonts | Bricolage Grotesque (headings), Instrument Sans (body) — SIL Open Font License | Google Fonts via Fontsource |
| App screenshots | **None supplied** — preview uses HTML illustrations, never published to production | — |
| App Store badge | **Not yet added** — download from Apple's marketing tools and save as `src/assets/img/app-store-badge.svg` | Apple |
