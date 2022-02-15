const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false, // doesn't use eval
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
