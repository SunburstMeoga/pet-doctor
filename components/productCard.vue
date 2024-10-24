<template>
	<view class="content">
		<view class="content-img" >
			<image :src="pictures"  mode="aspectFit"></image>
		</view>
		<view class="content-info">
			<view class="info-title">{{title}}</view>
			<view class="info-type">{{intro}}</view>
			<view class="info-price flex justify-start items-start">
				<view class="price-top">￥</view>
				<view class="price-num">{{price.toFixed(2)}}</view>
			</view>
		</view>
		<view class="buy-button" @click="buyNow()">立即购买</view>
	</view>
</template>

<script setup>
	import { defineProps,defineEmits } from 'vue';
	const emit = defineEmits(['handleBuyNow']);
	let buyNow = () => {
		emit('handleBuyNow')
	}
	const props = defineProps({
		pictures: {
		 type: String,
		 default: ''
		
		},
		title: {
			type: String,
			default: ''
		},
		intro: {
			type: String,
			default: ''
		},
		price: {
			type: Number,
			default: 0
		}
	})
</script>

<style lang="scss" scoped>
	.buy-button {
		width: 150rpx;
		height: 57rpx;
		text-align: center;
		line-height: 57rpx;
		color: #fff;
		background-color: #F7A040;
		border-radius: 8rpx;
		font-size: 24rpx;
		margin: 0 auto;
		margin-bottom: 20rpx;
	}
	.content {
		width: 100%;
		&-img {
			width: 303rpx;
			height:220rpx;
			border-radius: 24rpx;
			overflow: hidden;
		}
		&-info {
			padding: 24rpx;
			.info-title {
				color: #222;
				font-size: 28rpx;
				margin-bottom: 4rpx;
			}
			.info-type {
				color: #3B8AFA;
				font-size: 20rpx;
				margin-bottom:12rpx ;
			}
			.info-price {
				height: 38rpx;
				color: #222;
			}
		}
	}
</style>