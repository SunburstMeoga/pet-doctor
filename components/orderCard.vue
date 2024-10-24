<template>
	<view class="content flex justify-center items-center">
		<view class="content-info ">
			<view class="info-title flex justify-between items-center">
				<view class="title-left flex justify-start items-center">
					<view class="order-word">订单编号</view>
					<view class="order-content">787870079768689008</view>
				</view>
				<view class="title-right">{{status === 3 ? '交易成功' : '交易失败'}}</view>
			</view>
			<view class="info-details flex justify-between items-center">
				<view class="details-left">
					<image src="https://img1.baidu.com/it/u=3957729854,846758244&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" mode=""></image>
				</view>
				<view class="details-right flex justify-between items-end">
					<view class="right-price">￥{{price.toFixed(2)}}</view>
					<view class="right-count">共 {{count}} 件</view>
				</view>
			</view>
			<view class="info-type">自提</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,defineProps} from 'vue'
	const props = defineProps({
		orderNumber: {
			type: String,
			default: ''
		},
		price: {
			type: Number,
			default: 0
		},
		count: {
			type: Number,
			default: 0
		},
		status: {
			type: Number,
			default: 0
		}
	})
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		background-color: #fff;
		padding: 28rpx 0;
		.content-info {
			width: 630rpx;
			.info-title {
				width: 100%;
				font-size: 28rpx;
				.title-left {
					.order-word {
						color: #595959;
					}
					.order-content {
						color: #8c8c8c;
					}
				}
				.title-right {
					color: #595959;
				}
			}
			.info-details {
				width: 100%;
				margin: 24rpx 0;
				.details-left {
					width: 100rpx;
					height: 100rpx;
					// border: 1px solid red;
					border-radius: 10rpx;
					overflow: hidden;
				}
				.details-right {
					height: 100rpx;
					flex-direction: column;
					.right-price {
						color: #222;
						font-size: 32rpx;
					}
					.right-count {
						color: #595959;
						font-size: 24rpx;
					}
				}
			}
			.info-type{
				color: #595959;
			}
		}
	}
</style>