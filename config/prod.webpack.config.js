var webpackMerge = require('webpack-merge');
var commonConfig = require('../base.webpack.config.js');
var CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        // sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css)$/,
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      minRatio: 0.8,
    }),
  ],
});