# Launch inputs — what's still needed

Status as of 12 Nov 2026. The site builds and previews now; these items block or shape **production**.

## ⚠️ Company status — check before anything else
Companies House shows **GAME-BOY TECHNOLOGY LTD (14277750)** as **"Active — active proposal to strike off"**, with the **confirmation statement overdue** (due 15 Aug 2026). A company that is struck off can't trade or hold the App Store developer account. Kamruz should file the confirmation statement / object to the strike-off before launch.

## Needed from the client

| # | Item | Blocks | Where it goes |
|---|---|---|---|
| 1 | Confirm the company details shown in the footer (name, number 14277750, registered office 1 International House, St Katharine's Way, London E1W 1UN) | Footer in production | `site.json → company`, then `verified: true` |
| 2 | Verified UK App Store URL (or launch date) | Download badges | `site.json → ios` |
| 3 | 3 sanitised app screenshots: browse jobs, job details, post a job | Phone + walkthrough in production | `src/assets/img/screens/` + `index.md → screens` |
| 4 | Exact worker and job-poster workflow and in-app wording | "How it works" steps, FAQs, panel copy | `index.md → steps`, `support.md` |
| 5 | Are businesses a target audience? | Homepage messaging | `index.md` |
| 6 | Approved privacy notice (website + app: data, permissions, location, providers, retention, account deletion) | `/privacy/` and App Store Connect | `privacy.md` |
| 7 | Approved terms / EULA decision (Apple standard EULA or custom) | `/terms/` | `terms.md` |
| 8 | Support inbox: keep `ceo@del-boy.com` or create e.g. `support@del-boy.com`? Confirm it receives mail | Support page | `site.json → supportEmail` |
| 9 | Contact form provider approval (e.g. Formspree, UK/EU data handling) | Contact form (email fallback works meanwhile) | `site.json → form` |
| 10 | Approve the brand palette (red #D63832, warm neutral, near-black) and fonts | Design sign-off | — |
| 11 | GitHub + Cloudflare accounts owned by the client, and DNS access for del-boy.com | Production deploy | README |
| 12 | Any response-time promise for support | Optional | `support.md` |

## Developer to-do at launch
- Download Apple's official "Download on the App Store" badge (black, en-GB) to `src/assets/img/app-store-badge.svg`.
- Confirm support FAQ answers (account deletion route, sign-in help) match the app.
- Run `scripts/test.cjs` against the production URL; check on real iPhone and Android.
- Give Kamruz the App Store Connect URLs: `/support/` and `/privacy/`.

## Decisions taken in the preview (for approval)
- Palette built from the logo's red with a warm neutral background; Bricolage Grotesque + Instrument Sans self-hosted.
- Pre-launch state: "iOS launch coming soon" + "See how it works" as the hero action; no badge, no QR code.
- No analytics, no cookie banner (the site sets no cookies of its own).
- Illustrative app screens are HTML drawings, watermarked, and are stripped from production builds.
- Floating cards beside the phone are hidden below 600 px wide so they never cover the screen.
- Not built (optional extras): QR code, mobile bottom CTA, visual CMS editor, analytics/consent banner.
