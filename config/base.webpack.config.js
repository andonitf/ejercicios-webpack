var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const env = require('./base.env.config');

var basePath = __dirname;

module.exports = {
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    devtool: 'inline-source-map',
    context: path.join(basePath, '../src'),
    entry: {
      app: './js/main.tsx', 
      appStyles: [
        './css/mystyles.scss',
      ],
      vendor: [
        '@babel/polyfill',
      ]
    },
    output: {
      // path: path.join(basePath, '../dist'),
      filename: './js/[name].[chunkhash].bundle.js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            // name: 'vendor',
            name: "./css/vendor",
            test: 'vendor',
            enforce: true,
          }
        }      
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader, 
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ]
        },
        {
          test: /\.(png|jpg|ico)$/,
          exclude: /node_modules/,
          // loader: 'file-loader',
          // loader: 'url-loader?limit=2000',  // las img < 2000 bytes se cargan en el bundle
          use: {
            loader: 'url-loader',
            options: {
              limit: 2 * 1024, // las img < 2048 bytes se cargan en el bundle
              name: './assets/images/[hash].[name].[ext]',
            }
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            "babelCore": "@babel/core", // needed for Babel 7
          }
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html', // este esta en ./dist => fichero de salida
        template: 'index.html', // este esta en ./  => fichero origen
        // hash: true,  // va el hash en el chunk
        favicon: './assets/images/favicon.ico'
      }),
      new MiniCssExtractPlugin({
        // filename: "[name].css",
        filename: "./css/[name].[chunkhash].css",
        chunkFilename: "[id].css"
      }),
      new webpack.DefinePlugin({
        'process.env.LM_REST_ENV': JSON.stringify(env.LM_REST_ENV),
        'process.env.BASE_API_URL': JSON.stringify(env.BASE_API_URL),
      }),
    ]
  };
  