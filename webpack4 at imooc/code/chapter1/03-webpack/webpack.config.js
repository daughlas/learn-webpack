const path = require('path');

module.exports = {
  mode: 'development', // 默认模式
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // 要跟一个绝对路径
  }
}