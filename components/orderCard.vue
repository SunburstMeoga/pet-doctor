<template>
	<div class="content flex justify-center items-center">
		<div class="content-info ">
			<div class="info-title flex justify-between items-center">
				<div class="title-left flex justify-start items-center">
					<div class="order-word">订单编号</div>
					<div class="order-content">787870079768689008</div>
				</div>
				<div class="title-right">{{status === 3 ? '交易成功' : '交易失败'}}</div>
			</div>
			<div class="info-details flex justify-between items-center">
				<div class="details-left">
					<image src="https://img1.baidu.com/it/u=3957729854,846758244&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500" mode=""></image>
				</div>
				<div class="details-right flex justify-between items-end">
					<div class="right-price">￥{{price.toFixed(2)}}</div>
					<div class="right-count">共 {{count}} 件</div>
				</div>
			</div>
			<div class="info-type">自提</div>
		</div>
	</div>
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