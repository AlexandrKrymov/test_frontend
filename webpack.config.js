const path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
