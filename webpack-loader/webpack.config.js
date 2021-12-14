const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  resolveLoader: {
    modules: ['node_modules', 'my_loader']  // loader寻找的路径
  },
  module: {
    rules: [
      {
        test: /\.js/,
        // loader: path.resolve(__dirname, './my_loader/changeSourceCode.js'),
        loader: 'changeSourceCode',
        options: {
          name: 'myloader'
        }
      }
    ]
  },
  output: {
    // filename: '[name]_[contenthash]_[hash].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};