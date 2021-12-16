const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	devServer: {
		open: true,
		// static: {
		// 	directory: path.join(__dirname, 'dist')
		// }
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
	output: {
		filename: '[name]_[hash].js',
		path: path.resolve(__dirname, 'dist')
	}
}