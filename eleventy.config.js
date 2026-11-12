import markdownIt from "markdown-it";

const md = markdownIt({ html: true });

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  eleventyConfig.addWatchTarget("src/assets/");
  // Inline markdown for short front-matter strings (bold, links)
  eleventyConfig.addFilter("mdi", (s) => (s ? md.renderInline(String(s)) : ""));
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  // Render ® as a small raised mark in visible text (skips <head>, tags and attributes)
  eleventyConfig.addTransform("reg-mark", (content, outputPath) => {
    if (!outputPath?.endsWith(".html")) return content;
    const i = content.indexOf("<body");
    if (i < 0) return content;
    const body = content.slice(i).replace(/(<script[\s\S]*?<\/script>)|(<[^>]+>)|®/g, (m, script, tag) => script || tag || '<sup class="reg">®</sup>');
    return content.slice(0, i) + body;
  });
  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
