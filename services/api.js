import axios from './request.js'

//问卷列表
export const assessmentDetails = async (id) => {
	return axios({
		url: '/report/assessment/' + id,
		method: 'get'
	})
}
// 登录
export const login = async (params) => {
	return axios({
		url: '/login',
		method: 'post',
		data: params
	})
}
// 宠物身份证列表
export const petCards = async () => {
	return axios({
		url: "/pet/cards",
		method: 'get',
	})
}
//添加宠物身份证
export const storePetCard = async (data) => {
	return axios({
		url: '/pet/card',
		method: 'post',
		data
	})
}
//获取宠物品种
export const petBreeds = async (typeId) => {
	return axios({
		url: '/pet/breeds/' + typeId,
		method: 'get'
		
	})
}
//完成问题并创建报告
export const createReport = async (data) => {
	return axios({
		url: '/report',
		method: 'post',
		data
	})
}
//获取报告详情
export const reportDetails = async (id) => {
	return axios({
		url: '/report/' + id,
		method: 'get'
	})
}
//获取商品列表
export const allProduct = async () => {
	return axios({
		url: '/products',
		method: 'get'
	})
}
//创建订单
export const createOrder = async (data) => {
	return axios({
		url: '/order',
		method: 'post',
		data
	})
}
//购买接口
export const pay = async(data) => {
	return axios({
		url: '/pay',
		method: 'post',
		data
	})
}
//订单列表
export const orders = async(data) => {
	return axios({
		url: '/orders',
		method: 'get',
		data
	})
}
//报告列表
export const reports = async(data) => {
	return axios({
		url: '/reports',
		method: 'get',
		data
	})
}
export const userPhone = async (data) =>{
	return axios({
		url: '/user/phone',
		method: 'post',
		data
	})
}
//删除宠物身份证
export const deletePet = async (cardId) => {
	return axios({
		url: '/pet/card/' + cardId,
		method: 'delete',
	})
}
//获取个人信息
export const userInfo = async () => {
	return axios({
		url: '/user/info',
		method: 'get'
	})
}









export const refreshToken = async () => {
	
}