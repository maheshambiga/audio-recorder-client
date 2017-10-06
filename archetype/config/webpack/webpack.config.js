const _ = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const styleLoader = require.resolve('style-loader');
const cssLoader = require.resolve('css-loader');
const sassLoader = require.resolve('sass-loader');

module.exports = function (composer, options, compose) {
  const config = compose();

  // Remove uglify until we know what's going on
  const plugins = _.filter(config.plugins, (plugin) => plugin.__name && plugin.__name !== 'UglifyJsPlugin');

  // Remove the existing SCSS rule which for some reason is tied to the postCSS loader
  const rules = _.filter(config.module.rules,
    (item) => {

      return (item.test && !(_.includes(item.test.toString(), 'scss') ||
        _.includes(item.test.toString(), 'css')));
    });

  // These options come right from the existing extract-file.js partial.
  const cssLoaderOptions = '';
  // '?modules&localIdentName=[name]__[local]___[hash:base64:5]&-autoprefixer';

  // This is based on Anooj's full file solution that he gave to Ghassan over gitter
  const sassQuery = cssLoader + cssLoaderOptions + '!' + sassLoader;

  // Put the new loader rule at the front
  rules.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({ fallback: styleLoader, use: sassQuery, publicPath: '' })
  }, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      { fallback: styleLoader, use: cssLoader, publicPath: '' }),
  });

  // Replace the old list of rules with this new list
  //return config;
  return Object.assign({}, config, {
    plugins: plugins,
    module: {
      rules
    }
  });
};
