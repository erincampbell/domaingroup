var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/js/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin({ filename: 'src/client/public/styles/main2.css', disable: false, allChunks: true })
    ]
};

module.exports = config;