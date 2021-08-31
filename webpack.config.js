const path = require("path");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	mode: "development", // development | production
	entry: {
		app: [path.join(__dirname, "src/app.js")],
	}, // 工程资源的入口
	output: {
		path: path.join(__dirname, "dist"), // 绝对路径
		filename: "[name].js",
	},
	devServer: {
		port: 4000, // 服务端
		contentBase: path.resolve(__dirname, "public"),
		publicPath: "/dist/",
	},
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src'),
		},
	},
	// 文件加载器loader
	module: {
		rules: [
			{
				test: /\.ts$/i,
				use: ['ts-loader']
			},
			{
				test: /\.(css|scss|sass)$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.csv$/i,
				use: ["csv-loader"],
			},
			{
				test: /\.xml$/i,
				use: ["xml-loader"],
			},
		],
	},
	// plugins: [
	//     new UglifyJSPlugin()
	// ]
};
