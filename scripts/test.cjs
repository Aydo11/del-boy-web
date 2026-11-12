// Smoke test: screenshots + horizontal-scroll, h1, alt, console checks. Usage: node scripts/test.cjs [baseUrl] [outDir]
const { chromium, devices } = require("playwright");
const base = process.argv[2] || "http://localhost:8088", out = process.argv[3] || ".";
(async () => {
  const b = await chromium.launch(); let fails = 0;
  const vps = [["desktop", { viewport: { width: 1366, height: 860 } }], ["iphone", devices["iPhone 13"]], ["w320", { viewport: { width: 320, height: 640 }, isMobile: true, hasTouch: true }]];
  for (const [name, opts] of vps) for (const route of ["/", "/support/", "/privacy/", "/terms/"]) {
    const ctx = await b.newContext(opts), p = await ctx.newPage(), errs = [];
    p.on("console", (m) => m.type() === "error" && errs.push(m.text())); p.on("pageerror", (e) => errs.push(e.message));
    const r = await p.goto(base + route, { waitUntil: "networkidle" });
    await p.waitForTimeout(900);
    for (let y = 0; y < 20000; y += 500) { await p.mouse.wheel(0, 500); await p.waitForTimeout(40); }
    await p.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
    await p.waitForTimeout(700);
    const res = await p.evaluate(() => ({
      hscroll: document.documentElement.scrollWidth > innerWidth,
      h1: document.querySelectorAll("h1").length,
      noAlt: [...document.images].filter((i) => !i.hasAttribute("alt")).length,
      smallTaps: [...document.querySelectorAll("a,button,summary")].filter((e) => { const r = e.getBoundingClientRect(); return r.width && r.height < 40 && getComputedStyle(e).display !== "inline"; }).map((e) => e.textContent.trim().slice(0, 30)),
    }));
    const bad = r.status() !== 200 || res.hscroll || res.h1 !== 1 || res.noAlt || errs.length;
    if (bad) fails++;
    console.log(`${bad ? "FAIL" : "ok  "} ${name} ${route}`, JSON.stringify({ status: r.status(), ...res, errs }));
    if (route === "/" || name === "iphone") await p.screenshot({ path: `${out}/${name}${route.replace(/\//g, "_")}.png`, fullPage: route === "/" });
    await ctx.close();
  }
  await b.close(); process.exit(fails ? 1 : 0);
})();
