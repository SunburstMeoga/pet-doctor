<template>
	<view class="content">
		<view class="logo">
			<image mode="aspectFit" src="/static/images/logo.png" alt=""/>
		</view>
		<view class="home-banner" >
			<image mode="aspectFill" src="/static/images/home/home-banner.png" alt=""/>
		</view>
		<view class="acvive">
			<view class="one">
				<image  mode="aspectFill" src="/static/images/home/home-shop.png" alt=""/>
			</view>
			<view class="two">
				<image  mode="aspectFill" src="/static/images/home/home-active.png" alt=""/>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import MyTabbarVue from '../../components/my-tabbar.vue';
let title = ref('hello')
onMounted(() => {
	console.log(title.value)
})
</script>

<style scoped>
	.content {
		position: relative;
		background-color: #FFFBF2;
		height: 100vh;
	}
	.logo {
		width: 296rpx;
		height: 44rpx;
		position: absolute;
		z-index: 9999;
		top:112rpx;
		left:32rpx;
	}
	.home-banner {
		width: 100%;
		height: 1060rpx;
	}
	.acvive {
		width: 100%;
		background-color: #FFFBF2;
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 302rpx;
	}
	.one {
		width: 238rpx;
		height: 232rpx;
	}
	.two {
		width: 420rpx;
		height: 232rpx;
	}
</style>
