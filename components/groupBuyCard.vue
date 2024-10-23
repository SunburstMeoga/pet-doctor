<template>
	<div class="content">
		<div class="content-time">
			截至2025/08/22 23:00
		</div>
		<div class="content-info flex justify-center items-center">
			<div class="content-details flex justify-start items-start">
				<div class="details-left">
					<image :src="detail_pictures" mode=""></image>
				</div>
				<div class="details-right">
					<div class="right-title">{{title}}</div>
					<div class="right-details">{{intro}}</div>
					<div class="right-tags flex justify-start items-center">
						<div class="tags-item" v-for="(item, index) in tagsItems" :key="index">{{item}}</div>
					</div>
					
					<div class="buy  flex justify-between items-center">
						<div class="right-price">￥{{price.toFixed(2)}}</div>
						<div class="buy-button" @click="buyNow()">立即购买</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
			default: 'https://img1.baidu.com/it/u=3957729854,846758244&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
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