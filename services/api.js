import axios from './request.js'

export const assessmentDetails = async (id) => {
	return axios({
		url: '/report/assessment/${id}',
		method: 'get'
	})
}

export const login = async (data) => {
	return axios({
		url: '/login',
		method: 'post',
		data
	})
}

export const refreshToken = async () => {
	
}