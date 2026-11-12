import site from "./site.json" with { type: "json" };

// Production = Cloudflare Pages building the production branch, or SITE_ENV=production locally.
// Everything else (branch previews, local dev) is a preview: draft content shows, search engines are blocked.
const branch = process.env.CF_PAGES_BRANCH;
const production = process.env.SITE_ENV === "production" || (branch && branch === site.productionBranch);

const iosLive = site.ios.status === "live" && /^https:\/\/apps\.apple\.com\//.test(site.ios.url);

export default {
  production: Boolean(production),
  preview: !production,
  iosLive,
  branch: branch || "local",
};
