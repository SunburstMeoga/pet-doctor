<template>
	<view class="content">
		<view class="content-time">
			截至2025/08/22 23:00
		</view>
		<view class="content-info flex justify-center items-center">
			<view class="content-details flex justify-start items-start">
				<view class="details-left">
					<image :src="detail_pictures" mode=""></image>
				</view>
				<view class="details-right">
					<view class="right-title">{{title}}</view>
					<view class="right-details">{{intro}}</view>
					<view class="right-tags flex justify-start items-center">
						<view class="tags-item" v-for="(item, index) in tagsItems" :key="index">{{item}}</view>
					</view>
					
					<view class="buy  flex justify-between items-center">
						<view class="right-price">￥{{price.toFixed(2)}}</view>
						<view class="buy-button" @click="buyNow()">立即购买</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,defineProps,defineEmits} from 'vue'

	// let tagsItems = [{title: '上新'} , {title: '猫猫'}, {title: '毛绒'}]
	
	const props = defineProps({
		title: {
			type: String,
			default: ''
		},
		intro: {
			type:String,
			default: ''
		},
		tagsItems: {
			type: Array,
			default: () => []
		},
		price: {
			type: Number,
			default: 0
		},
		detail_pictures: {
			type: String,
			default: ''
		}
	})
	const emit = defineEmits(['handleBuyNow']);
	let buyNow = () => {
		emit('handleBuyNow')
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		background-color: #fff;
		.content-time {
			background-color: rgb(254, 217, 195);
			 color: #F54940;
			 font-size: 24rpx;
			 padding: 16rpx 24rpx;
		}
		.content-info {
			width: 100%;
			padding: 28rpx 0;
			background-color: #fff;
			border-radius: 24rpx;
			.content-details {
				width: 642rpx;
				height: 228rpx;
				border-radius: 24rpx;
				position: relative;
				.details-left {
					width: 220rpx;
					height: 220rpx;
					border-radius: 24rpx;
					// border: 1rpx solid red;
					overflow: hidden;
				}
				.details-right {
					margin-left: 24rpx;
					width: 398rpx;
					// border: 1px solid red;
					.right-title{
						color: #222;
						font-size: 32rpx;
						margin-bottom: 2rpx;
					}
					.right-details {
						color: #595959;
						font-size: 24rpx;
						margin-bottom: 2rpx;
					}
					.right-tags {
						margin-bottom: 2rpx;
						.tags-item {
							margin-right: 8rpx;
							padding: 0 8rpx;
							color: #fff;
							background-color: #F54940;
							border-radius: 8rpx;
							font-size: 20rpx;
						}
					}
					.right-price {
						color: #222;
						font-size: 32rpx;
						// border: 1px solid red;
						font-weight: 900;
					}
					.buy {
						position: absolute;
						right: 0;
						bottom: 0;
						width: 398rpx;
						.buy-button {
							width: 150rpx;
							height: 57rpx;
							text-align: center;
							line-height: 57rpx;
							color: #fff;
							background-color: #F7A040;
							border-radius: 8rpx;
							font-size: 24rpx;
						}
					}
				}
				
			}
		}
	}
</style>