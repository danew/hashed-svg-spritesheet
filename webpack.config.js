const webpack = require('webpack');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const createSvgPrefix = (file) => {
  const svgFolder = path.join(process.cwd(), 'src/svg');
  const pathSegments = path.relative(svgFolder, file).split('/');
  return pathSegments.slice(1, pathSegments.length-1).join('-') + '-'
};

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new SVGSpritemapPlugin('src/svg/banner/*.svg', {
      output: {
        filename: `banner.[contenthash].svg`,
        svg4everybody: true,
      },
      sprite: {
        prefix: false,
      }
    }),
    new SVGSpritemapPlugin('src/svg/logo/**/*.svg', {
      output: {
        filename: `logo.[contenthash].svg`,
        svg4everybody: true,
      },
      sprite: {
        prefix: createSvgPrefix,
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
