const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// TODO: add html-webpack-plugin
const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
    //  , new HtmlWebpackPlugin()
  ]
}

module.exports = config
