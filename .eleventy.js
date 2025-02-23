import pluginRss from "@11ty/eleventy-plugin-rss";
import yaml from "js-yaml";
import { DateTime } from "luxon";
import htmlmin from "html-minifier";
import Image, { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addShortcode("image", async function (src, alt) {
    let metadata = await Image(src, {
      transformOnRequest: process.env.ELEVENTY_RUN_MODE === "serve",
    });

    // You bet we throw an error on a missing alt (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
  });

  eleventyConfig.addAsyncShortcode(
    "ogImage",
    async function (src, alt, siteUrl) {
      if (!src) {
        console.warn("No source provided to ogImage shortcode");
        return "";
      }

      let metadata = await Image(src, {
        widths: [1200],
        formats: ["jpeg"],
        outputDir: "./_site/img/",
        urlPath: "/img/",
      });

      if (!metadata.jpeg || metadata.jpeg.length === 0) {
        console.warn("No JPEG image generated");
        return "";
      }

      const imageData = metadata.jpeg[0];

      return `
      <meta property="og:image" content="${siteUrl}${imageData.url}">
      <meta property="og:image:width" content="${imageData.width}">
      <meta property="og:image:height" content="${imageData.height}">
      <meta property="og:image:type" content="${imageData.sourceType}">
      <meta property="og:image:alt" content="${alt}">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:image" content="${siteUrl}${imageData.url}">
      <meta name="twitter:image:alt" content="${alt}">
    `;
    },
  );

  // eleventyConfig.addNunjucksGlobal("metaImage", metaImage);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy",
    );
  });

  eleventyConfig.addCollection("authors", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/authors/*.md");
  });

  eleventyConfig.addFilter("filterPostsByAuthor", (posts, authorName) => {
    return posts.filter(
      (post) => post.data.author && post.data.author.includes(authorName),
    );
  });
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addCollection("featuredPosts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .filter((item) => item.data.featured);
  });

  eleventyConfig.addFilter("filterFeatured", (posts) => {
    return posts.filter((post) => !post.data.featured);
  });

  eleventyConfig.addFilter("filterTagList", (tags) => {
    // should match the list in tags.njk
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1,
    );
  });

  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  // eleventyConfig

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents),
  );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    // "./node_modules/alpinejs/dist/alpine.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/static/css/fonts.css");
  eleventyConfig.addPassthroughCopy("./src/static/img");
  eleventyConfig.addPassthroughCopy("./src/static/fonts");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // Add a passthrough copy for the RSS feed

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
}
