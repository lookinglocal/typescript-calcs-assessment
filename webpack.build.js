const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  context: path.resolve('./src-ts/'),
  entry: './index.ts',
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.ContextReplacementPlugin(/\.\/locale$/, null, false, /js$/),
  ],
  optimization: {
    minimize: true,
    minimizer: [ new TerserPlugin({
      terserOptions: {
        mangle: true, // Note `mangle.properties` is `false` by default.
        compress: {
          defaults: true
        },
        sourceMap: true
      },
    })],
  },
};

const nodeConfig = {
  target: 'node',
  output: {
    filename: 'node-index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    chunkFormat: 'commonjs'
  },

};

const browserConfig = {
  externals: {
    lodash: '_',
    moment: 'moment'
  },
  target: 'es3',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    chunkFormat: 'array-push'
  },
};

Object.assign(browserConfig, config);
Object.assign(nodeConfig, config);

module.exports = [browserConfig, nodeConfig];
