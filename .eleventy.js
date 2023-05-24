module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './static/': '/static/',
  });

  return {
    dir: {
      input: 'content',
      includes: '../_includes',
      output: 'build',
    },
  };
};
