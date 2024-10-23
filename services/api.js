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

export const refreshToken = async () => {
	
}