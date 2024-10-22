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
// 宠物身份证
export const petCards = async => {
	return axios({
		url: "/pet/cards",
		method: 'get',
	})
}



export const refreshToken = async () => {
	
}