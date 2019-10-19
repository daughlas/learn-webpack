const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
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
      template: 'src/index.html'
    }),
  ],
  optimization: {
    usedExports: true
  },
  output: {
    // 默认叫 main.js
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  }

}