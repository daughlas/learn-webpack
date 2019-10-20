const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')


 const prodConfig= {
  mode: 'production',
  devtool: 'false',
  plugins: []
}

module.exports = merge(commonConfig, prodConfig)