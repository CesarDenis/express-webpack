'use strict'; // eslint-disable-line

const webpack = require('webpack');

const config = require('./config');

const assetsFilenames = (config.enabled.cacheBusting) ? config.cacheBusting : '[name]';

let webpackConfig = {
  context: config.paths.assets,
  entry: config.entry,
  devtool: (config.enabled.sourceMaps ? '#source-map' : undefined),
  output: {
    path: config.paths.dist,
    publicPath: config.publicPath,
    filename: `scripts/${assetsFilenames}.js`
  },
  stats: {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: config.paths.assets,
        use: 'eslint'
      },
      {
        test: /\.js$/,
        exclude: [/(node_modules|bower_components)(?![/|\\](bootstrap|foundation-sites))/],
        use: [
          { loader: 'babel' },
        ]
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
};

module.exports = webpackConfig;
