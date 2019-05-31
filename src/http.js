import axios from 'axios';
import { message } from 'ant-design-vue';
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'; // 配置请求头

if (process.env.NODE_ENV === 'production') {
	// 生产环境,线上环境
	axios.defaults.baseURL = 'http://survey.xukai.ink';
} else if (process.env.NODE_ENV === 'test') {
	// 测试环境
	axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'development') {
	// 开发环境
	axios.defaults.baseURL = 'http://survey.xukai.ink';
}

// let hide = function() {};
// function startLoading() {
//     hide = message.loading('', 0);
// }

// function endLoading() {
// 	hide();
// }

axios.interceptors.request.use(
	// 发送请求前拦截请求,将eleToken加入到headers.Authorization
	config => {
		// startLoading();
		return config;
	},
	error => {
		// endLoading();
		message.error('请求失败,请稍后再试!');
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	response => {
		// 返回拦截
		// endLoading();
		return response;
	},
	error => {
		// endLoading();
		message.error('请求返回失败!');
		return Promise.reject(error);
	}
);

export default axios;
