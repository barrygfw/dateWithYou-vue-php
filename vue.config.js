module.exports = {
	publicPath: '/', // 根域上下文目录
	outputDir: 'dist', // 构建输出目录
	assetsDir: 'assets', // 静态资源目录
	lintOnSave: true, // 是否开启eslint保存检测，有效值：true|false|'error'
	runtimeCompiler: true, // 运行时版本是否需要编译
	// transpileDepencies:[],
	productionSourceMap: false,
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'development') {
			// 开发环境配置
		} else if (process.env.NODE_ENV === 'production') {
			// 生产环境配置
		}
	},
	chainWebpack: config => {
		// 修改 Loader 选项
		// 图片优化
		// config.module
		//     .rule('image-webpack-loader')
		//     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
		//     .use('image-webpack-loader')
		//     // .loader('url-loader')
		//     .loader('image-webpack-loader')
		//     .options({
		//             limit: 10000
		//     })
	},
	parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
	pluginOptions: {},
	pwa: {},
	devServer: {
		open: true,
		host: '127.0.0.1',
		port: 8083,
		// https: false,
		// hotOnly: false,
		// proxy: { // 这个代理基本上用处不大了,因为请求地址在views/main.js用this.host根据环境重写了,无论是线上还是开发环境都可以直接用，即使打包后直接扔服务器也ok
		//     '/api': {
		//         // target:'http://localhost:8009/', //本地
		//         target: 'http://survey.xukai.ink', // 线上
		//         ws: true,
		//         changeOrigin: true,
		//         pathRewrite: {
		//             '^/api': '/api',
		//         },
		//     },
		// },
		// before: app => {},
	},
};
