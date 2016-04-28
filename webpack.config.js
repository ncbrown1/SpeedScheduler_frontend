var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client?reload=true',
    './src/index' // entry point of our app. src/index.js should require other js modules and dependencies it needs
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/, // to transform JSX into JS
        exclude: /node_modules/,
        loaders: ['react-hot','babel']
      },
    ],
  },
}
