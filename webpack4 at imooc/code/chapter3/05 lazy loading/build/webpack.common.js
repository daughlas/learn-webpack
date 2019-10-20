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
  // webpack plugins splitChunksPlugin 
  optimization: {
    usedExports: true,
    splitChunks: {
      // chunks: 'async', // 在我们做代码分割的时候，只对异步代码生效
      chunks: 'all', // 同步代码，异步代码都做代码分割
      minSize: 30000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: { // 符合下面条件的代码，打包之后，文件前缀都会加上一个 vendors
          test: /[\\/]node_modules[\\/]/, // 同步代码打包会走到这儿
          priority: -10,
          filename: 'vendors.js'
        },

        default: {
          // minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js'
        }
        // vendors: false, // 异步代码分割的时候走到这儿
        // default: false
      }
    }
  },
  output: {
    // 默认叫 main.js
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  }

}