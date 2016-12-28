module.exports = {
  cache: {
    cacheId: "hello-world",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "hello-world",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
