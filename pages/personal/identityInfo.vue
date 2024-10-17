<template>
	<div class="container flex justify-end items-center" >
		<div class="content flex justify-start items-center">
			<div class="content-title flex justify-end items-center">
				<div class="title-right flex justify-center items-center">
					<div class="icon iconfont icon-close"></div>
				</div>
			</div>
			<swiper class="swiper-box flex justify-start items-center" @change="change" :current="currentStep" >
				<swiper-item >
					<div class="info-one flex justify-start items-center">
						<div class="info-one-name">Hi~ 请填写爱宠昵称(仅支持20个字)</div>
						<div class="info-one-input flex justify-center items-center" style="margin-bottom: 64rpx;">
							<input type="text" placeholder="爱宠昵称"/>
						</div>
						<div class="info-one-name">Ta的生日</div>
						<div class="info-one-brithday flex justify-between items-center">
							<div class="info-one-brithday-select flex justify-center items-center">2024</div>
							<div class="info-one-brithday-word">年</div>
							<div class="info-one-brithday-select flex justify-center items-center">09</div>
							<div class="info-one-brithday-word">月</div>
							<div class="info-one-brithday-select flex justify-center items-center">21</div>
							<div class="info-one-brithday-word">日</div>
						</div>
					</div>
				</swiper-item>
				<swiper-item >
					<div style="width: 200rpx;height: 200rpx; border: 1px solid red;"></div>
				</swiper-item>
			</swiper>
		</div>
		
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	let currentStep = ref(0)
	let toPreStep = () => {
		currentStep.value = --currentStep.value
		console.log(currentStep.value)
	}
	let toNextStep = () => {
		currentStep.value = ++currentStep.value
		console.log(currentStep.value)
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		min-height: 100vh;
		flex-direction: column;		
		background-color: #f0f0f0;
		.content {
			width: 100%;
			height: 1200rpx;
			
			flex-direction: column;
			background-color: #fff;
			border-top-right-radius: 32rpx;
			border-top-left-radius: 32rpx;
		}
		.content-title {
			width: 670rpx;
			margin-top: 30rpx;
			&-right {
				height: 64rpx;
				width: 64rpx;
				background-color: #595959;
				color: #000;
				margin-top: 20rpx;
				border-radius: 50%;
				font-size: 20rpx;
			}
		}
		.swiper-box {
			width: 670rpx;
			margin-top: 96rpx;
			height: 800rpx;
		}
		.info-one {
			width: 670rpx;
			flex-direction: column;
			&-name {
				width: 100%;
				margin-bottom: 31rpx;
				color: #8c8c8c;
				font-size:32rpx;
			}
			&-input {
				width: 100%;
				height: 98rpx;
				background-color: #f5f5f5;
				border-radius: 24rpx;
				overflow: hidden;
				input {
					background-color: transparent;
					width: 606rpx;
					height: 100%;
					// text-indent: 32rpx;
					color: #000;
				}
			}
			&-brithday {
				width: 100%;
				&-select {
					width: 160rpx;
					height: 98rpx;
					border-radius: 24rpx;
					background-color: #f5f5f5;
					color: #262626;
					font-size: 36rpx;
				}
				&-word {
					color: #595959;
					font-size: 32rpx;
				}
			}
		}
	}
</style>