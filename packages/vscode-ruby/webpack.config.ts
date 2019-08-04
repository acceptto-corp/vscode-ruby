import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

module.exports = {
	entry: './src/ruby.ts',
	target: 'node',
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
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'ruby.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs2',
		devtoolModuleFilenameTemplate: '../[resource-path]',
	},
	devtool: 'source-map',
	externals: {
		vscode: 'commonjs vscode',
	},
	plugins: [new ForkTsCheckerWebpackPlugin()],
};