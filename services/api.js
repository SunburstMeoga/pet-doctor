import axios from './request.js'

export const assessmentDetails = async (id) => {
	return axios({
		url: '/report/assessment/${id}',
		method: 'get'
	})
}

export const login = async (params) => {
	return axios({
		url: '/login',
		method: 'post',
		data: params
	})
}

export const refreshToken = async () => {
	
}