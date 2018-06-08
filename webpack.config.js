const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/js/index.js',

	output: {
		filename: 'gol.js',
		path: path.resolve(__dirname, 'public/js')
	},

	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'public')
	},

	devtool: 'inline-source-map',

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};
