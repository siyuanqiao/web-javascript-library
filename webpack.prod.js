const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'bin':'./src/$/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'bin',
    libraryTarget:'umd'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname,'src')]
      }
    ]
  },
  resolve: {

  },
  devtool: 'none'
};