<template>
	<view class="flex justify-center items-center content">
		<view class="content-research">
			<view class="content-research-items flex justify-start items-center" v-for="(item,index) in researchItems" :key="index">
					<view class="content-research-items-dot"></view>
					<view class="content-research-items-title">{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
let researchItems = ref([{id:1,title: '基本信息'},{id:2,title: '营养目标'},{id:3,title: '生活习惯'},{id:4,title: '身体状况'}])
onMounted(() => {
	
})
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100vh;
		color: #222222;
		font-size: 48rpx;
		&-research {
			&-items {
				margin-bottom: 80rpx;
				&-dot {
					width: 16rpx;
					height: 16rpx;
					background-color: #222222;
					border-radius: 16rpx;
					margin-right: 24rpx;
				}
				&-title {
					font-size: 40rpx;
				}
			}
		}
	}
</style>