<template>
	<div class="flex justify-center items-center" style="width: 100%; height: 100%; flex-direction: column;">
		<button @click="login" class="login">来自乐途爹的登录按钮❤️</button>
		<div class="width: 400rpx; heigth:900rpx;">code: {{testCode}}</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	let testCode = ref('')
	let login = () => {
		uni.login({
			provider: 'weixin',
			success: (loginRes) => {
				console.log('登录成功', loginRes);
				testCode.value = loginRes.code
				// 这里的loginRes.code就是我们需要的临时登录凭证  
				// 发送code到你的服务器进行处理  
				// this.sendCodeToServer(loginRes.code);  
				console.log(loginRes.code)
			},
			fail: (error) => {
				console.error('登录失败', error);
			}
		});
	}
</script>

<style lang="scss">
</style>