<template>
	<view class="container flex justify-end items-center">
		<view class="container-bg">
			<image :src="mbtiImg" mode="aspectFill"></image>
		</view>
		<view class="container-bottom flex justify-start items-center">
			<view class="title">完成问卷仅需3-5分钟</view>
			<view class="protocol flex items-center">
				<view class="protocol-left flex justify-center items-center" @click="handleAgree()" :class="isAgree ? 'protocol-left-select' : 'protocol-left-unselect'">
					<view class="icon iconfont icon-right"></view>
				</view>
				<view @click="toPolicy()" class="protocol-right underline">同意<span class="underline inline-block">喵博士 X 汪博士协议</span></view>
			</view>
			<view @click="handleStarAnswer()" class="star">开始答题</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,onMounted} from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	let isAgree = ref(false)
	let assessmentId = ref('')
	let cardId = ref('')
	let mbtiImg = ref('')
	let handleAgree = () => {
		isAgree.value = !isAgree.value
		console.log(isAgree.value)
	}
	let toPolicy = () => {
		uni.navigateTo({
			url: '/pages/home/privacy_policy'
		})
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
		if(cardId.value) {
			uni.navigateTo({
				url: `/pages/home/mbti_questiton?cardId=${cardId.value}&assessmentId=${assessmentId.value}`
			})
		} else {
			console.log('跳转时的assessmentId.value', assessmentId.value)
			uni.navigateTo({
				url:`/pages/personal/petIDCardList?assessmentId=${assessmentId.value}`
			})
		}
	}
	onMounted(() => {
		
	})
	onLoad((options) => {
		console.log(options); // { id: '123', name: '张三' }
		if(options.cardId || options.assessmentId) {
			cardId.value = options.cardId
			assessmentId.value = options.assessmentId
			mbtiImg.value = assessmentId.value === '1' ? 'http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/e632NoVfwmitWYPRRIvXJItacKfSQtdrNNQC5JpN.png' :'http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/e632NoVfwmitWYPRRIvXJItacKfSQtdrNNQC5JpN.png'
			console.log(cardId.value,mbtiImg.value)
		}
		
		
	})
</script>

<style lang="scss" scoped>
	       .container {
			   background-color: #E8EFF5;
			   flex-direction: column;
			   height: 100vh;
			   .container-bg {
				   width: 100%;
				   flex:1;
			   }
			   .container-bottom {
				   // position: fixed;
				   width: 100%;
				   height: 256rpx;
				   // bottom: 0;
				   // left: 0;
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
