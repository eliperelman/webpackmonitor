const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonitorStats = require('./plugin/monitor-stats');
const statsFile = require('./monitor/stats.json');

const PATHS = {
  app: path.join(__dirname, 'client/index.jsx'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', 'json', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'Webpack Monitor',
      appMountId: 'root',
    }),
    // new MonitorStats(
    //   '../monitor/stats.json',
    //   { timings: true, source: false },
    //   statsFile,
    // ),
  ],
};