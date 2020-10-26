const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_DIR = fs.realpathSync(process.cwd());

function pathResolve(...args) {
  return path.resolve(ROOT_DIR, ...args);
}
const isDev = process.env.Node_ENV !== 'production';

function getName(mode) {
  return `[name].[${isDev ? 'hash:8' : 'contenthash'}].bundle.js`;
}
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: getName('js'),
    path: pathResolve('dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],

      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: pathResolve('public/index.html'),
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: '3000',
    open: true,
  },
};
