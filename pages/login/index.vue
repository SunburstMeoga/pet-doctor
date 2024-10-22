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
	let toLogin = async () => {
		let code,encryptedData,iv
		
		// 仅在用户点击按钮或其他交互操作时调用此方法  
		 uni.getUserProfile({  
		  desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中  
		  success: (res) => {  
		    console.log('获取用户信息成功', res);  
		    // res.encryptedData 和 res.iv 就是我们需要的加密数据和初始化向量  
		    // 接下来，你可以将这些数据发送到你的服务器进行解密和处理  
			encryptedData = res.encryptedData
			iv = res.iv
			console.log(encryptedData, iv)
			uni.login({
				provider: 'weixin',
				success: async (loginRes) => {
					console.log('登录成功', loginRes);
					testCode.value = loginRes.code
					// 这里的loginRes.code就是我们需要的临时登录凭证  
					// 发送code到你的服务器进行处理  
					// this.sendCodeToServer(loginRes.code);  
					console.log(loginRes.code)
					code = loginRes.code
					try {
						console.log(encryptedData,iv,code)
						const result = await login({code:code,iv:iv,encrypted_data:encryptedData})
						console.log(result)
					} catch (err) {
						console.log(err)
					}
				},
				fail: (error) => {
					console.error('登录失败', error);
				}
			});
		  },  
		  fail: (err) => {  
		    console.error('获取用户信息失败', err);  
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