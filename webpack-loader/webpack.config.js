const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sub: './src/sub.js',
  },
  module: {
    rules: [
      {
        test: /\.png/,
        use: {
          loader: 'url-loader',
          options: {
            // esModule: false,
            name: '[name]_[hash].[ext]',
            outputPath: 'static/media/',
            limit: 1024
          }
        }
      },{
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: { importLoaders: 2 },
        }, 'less-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [ 'autoprefixer']
              ]
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'plugin-title',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name]_[contenthash]_[hash].js',
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};