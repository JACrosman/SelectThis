const path = require('path');

module.exports = {
  entry: './src/index.ts',
  watch: true,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'select-this.js',
    path: path.resolve(__dirname, 'server', 'public'),
    library: 'SelectThis'
  }
};