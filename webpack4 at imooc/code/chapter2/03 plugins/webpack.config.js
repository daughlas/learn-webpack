const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  // webpack 运行到某一阶段的时候，做一些事情
  plugins:[
    new CleanWebpackPlugin(),
    // 在打包结束后，自动生成一个 html 文件
    // 把打包生成的 js 自动引入到这个 html 文件中
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

