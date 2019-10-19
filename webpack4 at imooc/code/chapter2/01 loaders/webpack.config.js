const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // 打包模块的时候该怎么办
  module: {
    rules: [
      // file-loader
      // {
      //   test: /\.(jpeg|jpg|gif|png)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       // placeholder
      //       name: '[name]_[hash].[ext]',
      //       outputPath: 'images/'
      //     }
      //   }
      // }
      {
        test: /\.(jpg|jpeg|git|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'image/',
            limit: 20480
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // 简单写法
          // 'css-loader',
          // 配置 css-loader
          {
            loader: 'css-loader',
            options: {
              // 引入的文件也执行下面两个 loader
              importLoaders: 2,
              // css 模块化
              modules: true
            }
          },
          'sass-loader',
          'postcss-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}