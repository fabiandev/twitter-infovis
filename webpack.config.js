var webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: '/public/js',
    publicPath: '/public/',
    filename: 'app.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules|vue\/src|vue-router\//,
      loader: 'babel'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  plugins: [],
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    modulesDirectories: ['node_modules']
  }
}
