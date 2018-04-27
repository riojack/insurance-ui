const path = require('path'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './app/index.jsx',
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$|\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true
    })]
  }
};
