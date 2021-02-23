const path = require('path');

module.exports = {
	entry: './ssrapp2.js',
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'dist'),
	},
	target: 'node',
	mode: 'development',
	devtool: 'source-map',
	externals: {
		vue: 'require("vue")'
	}
}