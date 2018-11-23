var webpackMerge = require('webpack-merge');
var commonConfig = require('./base.webpack.config.js');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map'
});