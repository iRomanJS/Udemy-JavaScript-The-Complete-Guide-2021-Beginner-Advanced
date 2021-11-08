const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: 3 } }]
            ]
          }
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};