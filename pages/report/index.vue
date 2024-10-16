<template>
	<view class="container">
		<view class="logo">
			<image mode="aspectFit" src="/static/images/logo.png" alt="" />
		</view>
		<div class="content flex justify-start items-center image-bg" style="background-image: url('../../static/images/report/banner.png');">
			<div class="add-service flex justify-between items-center">
				<div class="add-service-hi">
					<image src="/static/images/report/hi.png" mode="aspectFill"></image>
				</div>
				<div class="add-service-title">添加专属客服，获取正确的医疗指导</div>
				<div class="add-service-right">
					<div class="iconfont icon icon-down"></div>
				</div>
			</div>
			<div class="report">
				<swiper class="swiper-box" @change="change" :current="currentReport" >
					<swiper-item  class="flex justify-center items-center" v-for="(item, index) in 3" :key="index">
						<div class="swiper-item image-bg"  style="background-image: url('../../static/images/report/card.png');"></div>
					</swiper-item>
				</swiper>
			
			</div>
		</div>
		<div>sdljflaksjflkjsadlkfjlksjfdkljaslkdjf;klasj;dlfjk;alsdjfkl;sajkl;</div>
		
	</view>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from 'vue'
	let currentReport = ref(0)
	let change = (e) => {
		// currentQuestion.value = e.detail.current;
		console.log(e.detail.current)
	}
</script>

<style lang="scss" scoped>
	.container {
		// border:1px solid red;
		min-height: 100vh;
	}
	.content {
		position: relative;
		width: 100%;
		flex-direction: column;
		
		.swiper-box {
			width: 750rpx;
			height: 220rpx;
			flex-direction: column;
			// border: 1px solid red;
		}
		.swiper-item {
			width: 622rpx;
			height: 220rpx;
			border: 1px solid red;
			text-align: center;
			line-height: 220rpx;
		}
	}


	.logo {
		width: 296rpx;
		height: 44rpx;
		position: absolute;
		z-index: 9999;
		top: 112rpx;
		left: 32rpx;
	}

	.add-service {
		width: 686rpx;
		height: 88rpx;
		background-color: #fff;
		border-radius: 24rpx;
		color: #222;
		margin-top: 208rpx;
		margin-bottom: 32rpx;

		&-hi {
			width: 80rpx;
			height: 80rpx;
			margin-top: -40rpx;
			margin-left: 28rpx;
		}

		&-title {
			font-size: 28rpx;
		}

		&-right {
			font-size: 22rpx;
			margin-right: 28rpx;
		}
	}


</style>