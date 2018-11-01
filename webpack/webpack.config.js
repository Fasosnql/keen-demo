const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

const webpackConfig = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: './public',
    noInfo: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
};

if (process.env.NODE_ENV === 'production') {
  //delete webpackConfig.entry.splice(1, 1);
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }));
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = webpackConfig;
