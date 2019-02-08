const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
	// entry: "./resources/assets/lang-trans/ts/app.ts",
	mode: "production",
	target: 'node-webkit',
	node: {
		fs: 'empty',
		'nw.gui': 'empty'
	},
	// mode: "development",
	module: {
		rules: [
			// {
			// 	test: /\.scss$/,
			// 	use: ["vue-style-loader", "css-loader", "sass-loader"]
			// },
			{
				// test: /\.tsx?$/,
				test: /\.tsx?$/,
				// use: "ts-loader",
				loader: "ts-loader",
				exclude: /(node_modules|vendor|webpack\.config\.js)/,
				options: {
					// appendTsSuffixTo: [/\.vue$/]
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}

			// {
			// 	test: /\.vue$/,
			// 	loader: "vue-loader"
			// },
			// {
			// 	test: /\.pug$/,
			// 	loader: "pug-plain-loader"
			// }
		]
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()],
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					// name: 'vendors',
					chunks: 'all'
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	entry: {
		app: "./src/main.ts",
		// file: "./file.js"
		// another: './src/another-module.js'
	},
	/* plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin()
	],*/
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "bundle")
	},
	resolve: {
		// extensions: [".tsx", ".ts", ".js"]
		extensions: [".ts", ".js", '.tsx']
	}
	// output: {
	// 	filename: "./app.js",
	// 	path: path.resolve(__dirname, "public/lang-trans/js")
	// }
};

module.exports = config;
