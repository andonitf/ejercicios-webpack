var webpackMerge = require('webpack-merge');
var commonConfig = require('./base.webpack.config.js');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin()
  ],
});