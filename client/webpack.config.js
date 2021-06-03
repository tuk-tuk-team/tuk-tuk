'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js']
	},

	devtool: 'source-map',

	devServer: {
        proxy: {
            '/api': 'http://localhost:4000/',
        },
		historyApiFallback: true,
		port: 3100
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]
};
