const path = require('path');

module.exports = {
  entry: 'style-dictionary',
  output: {
    filename: 'style-dictionary.bundle.js',
    path: path.resolve(__dirname, 'js'),
  },
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      process: require.resolve('process/browser'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      fs: false, // disable fs module
    },
  },
};
