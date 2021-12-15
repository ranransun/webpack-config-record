const path = require('path');
const CreatfileWebpackPlugin = require('./my-plugin/creatfile-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	plugins: [
		new CreatfileWebpackPlugin(),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}