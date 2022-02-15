module.exports = {
  entry: { main: './src/index.js', vendor: './src/vendor.js' },
  module: {
    rules: [
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
