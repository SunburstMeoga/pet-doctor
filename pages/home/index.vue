<template>
	<view class="content">
		<view class="home-banner" >
			<image class="full-image"  mode="aspectFill" src="/static/images/home/home-banner.png" alt=""/>
		</view>
		<view class="acvive">
			<view class="one">
				<image class="full-image"  mode="aspectFill" src="/static/images/home/home-shop.png" alt=""/>
			</view>
			<view class="two">
				<image class="full-image"  mode="aspectFill" src="/static/images/home/home-active.png" alt=""/>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
let title = ref('hello')
onMounted(() => {
	console.log(title.value)
})
</script>

<style scoped>
	.home-banner {
		width: 100%;
		height: 580px;
	}
	.acvive {
		width: 100%;
		background-color: #FFFBF2;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 16px 0;
		
	}
	.one {
		width: 119px;
		height: 116px;
	}
	.two {
		width: 210px;
		height: 116px;
	}
</style>
