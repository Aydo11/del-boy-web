// Generates favicon, apple-touch-icon and Open Graph share image from the brand SVGs. Run: node scripts/make-icons.cjs
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const img = (f) => "data:image/svg+xml;base64," + fs.readFileSync(path.join(__dirname, "../src/assets/img", f)).toString("base64");
const font = "data:font/woff2;base64," + fs.readFileSync(path.join(__dirname, "../src/assets/fonts/bricolage-grotesque-latin-wght-normal.woff2")).toString("base64");
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  const out = (f) => path.join(__dirname, "../src/assets/img", f);
  for (const [f, s] of [["favicon-32.png", 32], ["apple-touch-icon.png", 180]]) {
    await p.setViewportSize({ width: s, height: s });
    await p.setContent(`<body style="margin:0"><img src="${img("icon-red.svg")}" style="width:${s}px;height:${s}px;display:block">`);
    await p.screenshot({ path: out(f) });
  }
  await p.setViewportSize({ width: 1200, height: 630 });
  await p.setContent(`<style>@font-face{font-family:B;src:url(${font})}body{margin:0;width:1200px;height:630px;background:#F6F1EA;font-family:B;display:flex;align-items:center;gap:70px;padding:0 90px;box-sizing:border-box;position:relative;overflow:hidden}
  .g{position:absolute;right:-120px;top:-60px;width:760px;height:760px;background:radial-gradient(closest-side,rgba(214,56,50,.28),transparent)}
  h1{font-size:88px;line-height:.95;letter-spacing:-3px;margin:28px 0 22px;font-weight:800;color:#17120E}p{font-size:30px;color:#5B524A;margin:0;font-weight:500}</style>
  <div class=g></div><div style="position:relative;flex:1"><img src="${img("logo-red.svg")}" style="width:300px;border-radius:12px"><h1>Instant jobs. Instant pay.</h1><p>Find quick jobs or post a job — on iPhone</p></div>
  <img src="${img("icon-red.svg")}" style="position:relative;width:260px;border-radius:58px;box-shadow:0 30px 60px -20px rgba(120,30,20,.5)">`);
  await p.screenshot({ path: out("og-image.jpg"), type: "jpeg", quality: 86 });
  await b.close();
})();
