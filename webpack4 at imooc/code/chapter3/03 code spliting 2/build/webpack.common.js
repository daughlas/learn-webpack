const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../','src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new CleanWebpackPlugin({
      default: ['dist']
    }, {
      root: path.resolve(__dirname, '../')
    })
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    // 默认叫 main.js
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  }

}