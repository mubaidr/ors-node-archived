const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = config
