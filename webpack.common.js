const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js', vendor: './src/vendor.js' },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. injects styles into DOM
          'css-loader', // 2. turns css into commonjs
          'sass-loader', // 1. turns sass into css
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jp?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
