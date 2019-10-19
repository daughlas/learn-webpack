const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // development 默认会加载 sourcemap
  mode: 'development',
  // 管变 source-map
  // devtool: 'none',
  // inline-source-map map 信息不是写在map.js 文件，而是写在 main.js 里边
  // 不加 cheap 会告诉你哪一行，那一列出问题，加了只提示哪一行，map 只映射业务代码，不管第三方库的问题
  // moodule 不仅自己写的业务代码，也映射第三方模块垂涎的错误
  // eval 打包最快，代码复杂，提示不全面
  // 最佳实践，开发配置 cheap-module-eval-source-map
  // 最佳实践，上线配置 cheap-module-source-map
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // 自动打开浏览器，并访问该地址
    open: true,
    // 端口号
    // port: 8090,
    // 开启 hot module replacement
    hot: true,
    // 即使 hot 失效，浏览器也不自动更新
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // 里边的内容，就是 babelrc 的内容
        // options: {
        //   // 一般情况配置 presets
        //   // "presets": [["@babel/preset-env", {
        //   //   targets: {
        //   //     chrome: '67'
        //   //   },
        //   //   // 只 polyfill 使用到的 ES 6 语法
        //   //   'useBuiltIns': 'usage'
        //   // }]]

        //   // 打包自己的类库的时候
        //   // 避免 poly-fill  污染全局环境
        //   "plugins": [[
        //     "@babel/plugin-transform-runtime",
        //     {
        //       "corejs": 2,
        //       "helpers": true,
        //       "regenerator": true,
        //       "useESModules": false
        //     }
        //   ]]
        // }
      }
    ]
  },
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    // 默认叫 main.js
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  }

}