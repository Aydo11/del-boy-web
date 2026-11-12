# How to edit the DEL-BOY® website

You can make every routine change in your web browser on GitHub. You don't need to install anything.

## Which file do I open?

| I want to change… | Open this file | Look for |
|---|---|---|
| Homepage headline and intro | `src/index.md` | `hero:` |
| "Find work" / "Post a job" panels | `src/index.md` | `audiences:` |
| How it works steps | `src/index.md` | `steps:` |
| App screenshots, captions, alt text | `src/index.md` | `screens:` |
| Homepage quick questions | `src/index.md` | `faqs:` |
| Support FAQs | `src/support.md` | `faqGroups:` |
| Support / business email | `src/_data/site.json` | `supportEmail`, `businessEmail` |
| **App Store link and launch status** | `src/_data/site.json` | `ios:` |
| Android status text | `src/_data/site.json` | `android:` |
| Footer company details | `src/_data/site.json` | `company:` |
| Contact form | `src/_data/site.json` | `form:` |
| Privacy wording | `src/privacy.md` | see the comment in the file |
| Terms wording | `src/terms.md` | see the comment in the file |

Text goes **between the quotes**. Keep the spaces at the start of each line exactly as they are — they matter.

## The publishing flow

1. On GitHub, open the file and click the **pencil icon** (Edit).
2. Make your change.
3. Click **Commit changes…**, choose **Create a new branch** and give it a short name like `new-headline`. Click **Propose changes**, then **Create pull request**.
4. Wait about a minute. Cloudflare posts a comment on the pull request with a **preview link**. Open it on your phone and check the change.
5. Happy? Click **Merge pull request** → **Confirm merge**. The live site updates in about a minute.
6. Open https://del-boy.com and check the change is live (refresh the page).

### Undo a change

Open the merged pull request on GitHub and click **Revert**. This creates a new pull request that puts things back — merge it the same way.

## Common jobs

### Go live on the App Store
In `src/_data/site.json`:
```json
"ios": {
  "status": "live",
  "url": "https://apps.apple.com/gb/app/del-boy/id..........",
```
The badges only appear when `status` is `live` **and** the URL starts with `https://apps.apple.com/`. Make sure `src/assets/img/app-store-badge.svg` (Apple's official badge) is in place first.

Also update the homepage `description:` and the first FAQ in `src/index.md` and `src/support.md` so they say the app is available.

### Replace an app screenshot
1. Go to `src/assets/img/screens/` on GitHub → **Add file** → **Upload files**. Use a portrait iPhone screenshot (e.g. 1170 × 2532), saved as `.webp` or `.jpg` under 200 KB, with no personal details visible.
2. In `src/index.md`, set that screen's `image:` to the path, e.g. `image: "/assets/img/screens/browse.webp"`, and update `caption:` and `alt:`.

### Publish the privacy notice or terms
Paste the approved wording into `src/privacy.md` or `src/terms.md` where the comment says, then in `src/_data/site.json` set `privacyApproved` / `termsApproved` to `true` and fill in the date.

### Show the footer company details
After confirming them, set `"verified": true` under `company` in `src/_data/site.json`.
