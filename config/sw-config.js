module.exports = {
  cache: {
    cacheId: 'demoApp',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'demoApp',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
