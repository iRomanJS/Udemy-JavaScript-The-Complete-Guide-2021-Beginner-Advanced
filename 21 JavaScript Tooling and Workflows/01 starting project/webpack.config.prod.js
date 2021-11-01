const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',
  devServer: {
    static: '/java script/Udemy JavaScript The Complete Guide 2021 Beginner Advanced/21 JavaScript Tooling and Workflows/01 starting project'
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};
