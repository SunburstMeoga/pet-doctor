<template>
	<div class="flex justify-center items-center" style="width: 100%; height: 100vh;">
		<button @click="toLogin()" class="login flex justify-center items-center">登录</button>
		<!-- <div style="width: 100%; height:900rpx;">code: {{testCode}}</div>
		
		<div style="width: 100%; height:900rpx;">iv: {{iv}}</div>
		<div style="width: 100%; height: 900rpx; word-wrap:break-word;
word-break:break-all;">encryptedData: {{encryptedData}}</div> -->
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		login,
		petCards
	} from '@/services/api.js'
	let testCode = ref('')
	let encryptedData = ref('')
	let iv = ref('')
	onMounted(() => {
		// if(uni.getStorageSync('token') && uni.getStorageSync('token') !== undefined && uni.getStorageSync('token') !== 'undefined') {
		// 	console.log(uni.getStorageSync('token'))
		// 	uni.switchTab({
		// 		url: '/pages/home/index'
		// 	})
		// }

	})
	let getPetCards = async () => {
		const reuslt = await petCards()
		console.log()
	}
	let toLogin = async () => {
		uni.showLoading({
			title: '正在登录...',
			mask: true // 是否显示透明蒙层，防止触摸穿透  
		});
		let code, encryptedData, iv
		// 仅在用户点击按钮或其他交互操作时调用此方法  
		uni.getUserProfile({
			desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中  
			success: (res) => {
				console.log(res)
				if (res.platform === 'devtools') {
					uni.setEnableDebug({
						enableDebug: true
					});
				}
				encryptedData = res.encryptedData
				iv = res.iv
				console.log(encryptedData, iv)
				uni.login({
					provider: 'weixin',
					success: async (loginRes) => {
						console.log('登录成功', loginRes);
						testCode.value = loginRes.code
						console.log(loginRes.code)
						code = loginRes.code
						try {
							console.log(encryptedData, iv, code)
							const result = await login({
								code: code,
								iv: iv,
								encrypted_data: encryptedData
							})
							console.log(result)
							uni.setStorageSync('token',
								`Bearer ${result.data.data.api_token}`)
							console.log(result.data.data.api_token)
							console.log(uni.getStorageSync('token'))
							const petCardsList = await petCards()
							console.log(petCardsList.data,petCardsList)
							uni.hideLoading();
							if(petCardsList.data.length === 0) {
								uni.navigateTo({
									url: '/pages/home/star_answer'
								})
							} else {
								uni.navigateTo({
									url: "/pages/personal/identityInfo"
								})
								
							}
							
							
	
						} catch (err) {
							console.log(err)
							uni.hideLoading();
						}
					},
					fail: (error) => {
						console.error('登录失败', error);
						uni.hideLoading();
					}
				});
			},
			fail: (err) => {
				console.error('获取用户信息失败', err);
				uni.hideLoading();
			}
		});
	
	
	
	}
</script>

<style lang="scss">
	.login {
		width: 486rpx;
		color: #222;
		background-color: #FCE068;
		border-radius: 24rpx;
		height: 92rpx;
	}
</style>