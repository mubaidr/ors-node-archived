const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config
