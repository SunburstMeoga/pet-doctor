// 目录:utils/request
 
import axios from "axios";
// 由于微信小程序和app 用并没有xmlhttpRequest 对象,需要设置对应的适配器,
// 实际上就是调用了 uni.request 方法
import {
	UniAdapter
} from "uniapp-axios-adapter";
import {
	refreshToken
} from "@/services/api.js"
import {
	getCurrentRoute
} from "@/utils/index"
 
 
const request = axios.create({
	baseURL:'http://120.76.219.115/api',
	timeout: 60000,
	adapter: UniAdapter, // 指定适配器1
});
	request.interceptors.request.use(async (config) => {
	console.log(uni.getStorageSync('token'))
	config.headers["Authorization"] = uni.getStorageSync('token');
		return config;
	});
 
request.interceptors.response.use((response) => {
	// 统一处理响应,返回Promise以便链式调用
	if (response.status === 200 || response.status === 204) {
		if (response?.statusCode === 200 || response?.statusCode === 204) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	} else {
		// 处理token过期失效
		if (response.status === 401) {
			console.log('未登录')
			
		} else if (response.status === 422) {}
		return Promise.reject(response);
	}
});
 
function expireToken(e) {
	console.log(e);
	uni.clearStorageSync()
	uni.showToast({
		title: '登录已失效,请重新登录',
		icon: 'none',
		duration: 1000
	})
	setTimeout(() => {
		uni.reLaunch({
			url: '/pagesA/login/login'
		})
	}, 1000)
}
 
function saveToken(res, config) {
	res = res.data
	uni.setStorageSync("token", 'Bearer ' + res.access_token)
	let time = new Date().getTime()
	// 设置过期时间
	// 获取当前token的过期时间,要在token过期前刷新
	// 后端传过来的expires_in的单位为秒,转换成毫秒值
	let expire_time = time + res.expires_in * 1000
	uni.setStorageSync("expire_time", expire_time)
	config.headers["Authorization"] = uni.getStorageSync('token');
}
 
export default request;