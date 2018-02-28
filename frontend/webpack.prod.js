const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: []
})

module.exports = config
