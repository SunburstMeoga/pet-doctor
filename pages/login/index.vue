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
		ref, onMounted
	} from 'vue'
	import {login} from '@/services/api.js'
	let testCode = ref('')
	let encryptedData = ref('')
	let iv = ref('')
	onMounted(() => {
		// toLogin()
	})
	let getUserProfileWrapper = () => {  
	            return new Promise((resolve, reject) => {  
	                uni.getUserProfile({  
	                    desc: '用于完善会员资料',  
	                    success: (res) => resolve(res.userInfo),  
	                    fail: (err) => reject(err)  
	                });  
	            });  
	        }  
			let loginWrapper = () => {
				uni.login({
					provider: 'weixin',
					success: (loginRes) => {
						console.log('登录成功', loginRes);
						testCode.value = loginRes.code
						// 这里的loginRes.code就是我们需要的临时登录凭证  
						// 发送code到你的服务器进行处理  
						// this.sendCodeToServer(loginRes.code);  
						console.log(loginRes.code)
						code = loginRes.code
					},
					fail: (error) => {
						console.error('登录失败', error);
					}
				});
			}
	let toLogin = async () => {
		const result1= await getUserProfileWrapper()
		const  result2= await getUserProfileWrapper()
		console.log(result1, result2)
		return
		try {
			const result3 = await login({code,iv,encryptedData})
			console.log(result3)
		} catch (err) {
			console.log(err)
		}
		
		
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