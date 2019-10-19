const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')


 const prodConfig= {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ]
}

module.exports = merge(commonConfig, prodConfig)