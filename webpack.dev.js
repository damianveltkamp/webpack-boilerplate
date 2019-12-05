const path = require('path');

const common = require('./webpack.config')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parsePath = path.parse(__filename);
module.exports = merge(common,{
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: parsePath.dir + '/dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: parsePath.dir + '/src/index.html'
        })
    ],
    module: {
      rules: [
          {
              test: /\.scss$/,
              use: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader' ]
          }
      ]
    },
    devServer: {
        contentBase: 'dist',
        port: 9000,
        watchContentBase: true
    }
})