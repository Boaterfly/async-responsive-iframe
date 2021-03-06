module.exports = {
  watch: true,
  module: {
    rules: [
      // transpile js file using babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
