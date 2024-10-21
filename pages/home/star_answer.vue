<template>
	<view class="container">
		<div class="container-bg"></div>
		<div class="container-bottom flex justify-start items-center">
			<div class="title">完成问卷仅需3-5分钟</div>
			<div class="protocol flex items-center">
				<div class="protocol-left flex justify-center items-center" @click="handleAgree()" :class="isAgree ? 'protocol-left-select' : 'protocol-left-unselect'">
					<div class="icon iconfont icon-right"></div>
				</div>
				<div class="protocol-right underline">同意<span class="underline inline-block">喵博士 X 汪博士协议</span></div>
			</div>
			<div @click="handleStarAnswer()" class="star">开始答题</div>
		</div>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	let isAgree = ref(false)
	let handleAgree = () => {
		isAgree.value = !isAgree.value
		console.log(isAgree.value)
	}
	let handleStarAnswer = () => {
		if(!isAgree.value) {
			uni.showToast({
				title: '需同意并勾选喵博士 X 汪博士协议',
				icon:'none',
				duration:3000
			})
			return
		}
		uni.navigateTo({
			url: '/pages/home/mbti_questiton'
		})
	}
</script>

<style lang="scss" scoped>
	       .container {
			   background-color: #E8EFF5;
			   .container-bg {
				   width: 100%;
				   height: 100vh;
				   // border: 1px solid red;
			   }
			   .container-bottom {
				   position: fixed;
				   width: 100%;
				   height: 256rpx;
				   bottom: 0;
				   left: 0;
				   padding-bottom: 88rpx;
				   background-color: #fff;
				   flex-direction: column;
			   }
			   .title {
				   color: #8c8c8c;
				   font-size: 24rpx;
				   margin-top: 32rpx;
				   margin-bottom: 25rpx;
			   }
			   .protocol {
				   color: #222;
				   margin-bottom: 34rpx;
				   .protocol-left {
					   width: 28rpx;
					   height: 28rpx;
					   
					   color: #fff;
					   border: 1rpx solid #000;
					   border-radius: 4rpx;
					   .icon {
						   font-weight: 900;
						   font-size: 30rpx;
					   }
				   }
				   .protocol-left-select {
					   background-color: #000;
					   
				   }
				   .protocol-left-unselect {
					   background-color: #fff;
				   }
				   .protocol-right {
					   margin-left: 6rpx;
				   }
			   }
			   .star {
				   width: 486rpx;
				   height: 92rpx;
				   border-radius: 24rpx;
				   background-color: #FCE16A;
				   color: #222;
				   text-align: center;
				   line-height: 92rpx;
			   }
		   }
</style>
