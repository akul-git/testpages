module.exports = function(eleventyConfig) {
eleventyConfig.addGlobalData("eleventyComputed", {
  permalink: data => {
    if (data.page.filePathStem === "/index") return "/";
    return `${data.page.filePathStem}/index.html`;
  }
});

eleventyConfig.addPassthroughCopy({ 
  "src/styles/styles.css": "assets/css/styles.css",
  "src/css/slides.css": "assets/css/slides.css",
  "src/css/testimonials.css": "assets/css/testimonials.css",
  "src/fa": "assets/fa",
  "src/images": "assets/images",
  "src/js": "assets/js"
});

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};