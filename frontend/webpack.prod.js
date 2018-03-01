// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const config = merge(common, {
  /* ,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      },
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin('index.css')]
  */
})

module.exports = config
