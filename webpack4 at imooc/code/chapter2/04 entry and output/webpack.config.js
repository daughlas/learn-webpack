const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    'main': './src/index.js',
    'sub': './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  output: {
    // 默认叫 main.js
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'https://cdn.com.cn'
  }

}