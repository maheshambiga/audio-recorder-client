module.exports = {
  cache: {
    cacheId: 'Storyscape',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'Storyscape',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
