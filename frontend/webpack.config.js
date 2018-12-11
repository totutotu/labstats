const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env, argv) => {
  const { mode } = argv

  const cssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name]-[id].css'
  })
  const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    title: 'Hot Module Replacement'
  })
  const additionalPlugins = mode === 'production'
    ? []
    : [new webpack.HotModuleReplacementPlugin()] // Enable hot module replacement
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
        ,
        { // Load CSS files
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    devServer: {
      hot: true,
      proxy: {
        '/api': 'http://localhost:3000'
      },
      historyApiFallback: true
    },
    plugins: [htmlPlugin,
      cssPlugin,
      ...additionalPlugins
    ],
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
  }
}
