module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './static/': '/static/',
  });

  return {
    dir: {
      data: '../_data',
      input: 'content',
      includes: '../_includes',
      output: 'build',
    },
  };
};
