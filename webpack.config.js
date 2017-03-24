const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new  HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
})


module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/public',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
				query:
		      {
		        presets:['react']
		      }, 
			}
		]
	},

	  plugins: [HTMLWebpackPluginConfig]
}