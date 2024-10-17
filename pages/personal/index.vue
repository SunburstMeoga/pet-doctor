<template>
	<div class="container">
		<view class="logo">
			<image mode="aspectFit" src="/static/images/logo.png" alt="" />
		</view>
		<div class="infor flex justify-center items-center image-bg" style="background-image: url('../../static/images/personal/banner.png');">
			<div class="infor-details flex justify-between items-center">
				<div class="infor-details-left flex justify-start items-start">
					<div class="infor-details-left-avator"></div>
					<div class="infor-details-left-base flex justify-center items-start">
						<div class="infor-details-left-base-name">Petting</div>
						<div class="infor-details-left-base-intro">喵博士 X 汪博士</div>
					</div>
				</div>
				<div class="infor-details-right flex justify-end items-center">
					<div class="infor-details-right-items flex justify-start items-center" style="margin-right: 32rpx;">
						<div class="infor-details-right-items-icon icon iconfont icon-dizhiguanli"></div>
						<div class="infor-details-right-items-word">收货地址</div>
					</div>
					<div class="infor-details-right-items flex justify-start items-center">
						<div class="infor-details-right-items-icon icon iconfont icon-icon-test"></div>
						<div class="infor-details-right-items-word">个人资料</div>
					</div>
				</div>
			</div>
		</div>
		<div class="vip">
			<div class="vip-content image-bg flex justify-center items-end" style="background-image: url('../../static/images/personal/vip-banner.png');">
				<div class="vip-content-operating flex justify-between items-center">
					<div class="vip-content-operating-items flex justify-center items-center">
						<div class="vip-content-operating-items-icon icon iconfont icon-daifukuan"></div>
						<div class="vip-content-operating-items-word">代付款</div>
					</div>
					<div class="vip-content-operating-items flex justify-center items-center">
						<div class="vip-content-operating-items-icon icon iconfont icon-daifahuo"></div>
						<div class="vip-content-operating-items-word">待发货</div>
					</div>
					<div class="vip-content-operating-items flex justify-center items-center">
						<div class="vip-content-operating-items-icon icon iconfont icon-daishouhuo"></div>
						<div class="vip-content-operating-items-word">待收货</div>
					</div>
					<div class="vip-content-operating-items flex justify-center items-center" style="width: 172rpx;">
						<div class="vip-content-operating-items-icon icon iconfont icon-shouye"></div>
						<div class="vip-content-operating-items-word">全部</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="service image-bg" style="background-image: url('../../static/images/personal/service.png');">
			
		</div>
		<div class="other-info flex items-center">
			<div class="other-info-items" style="border-bottom: 1rpx solid #E6E6E6">爱宠身份证</div>
			<div class="other-info-items">喵汪博士隐私申明</div>
		</div>
	</div>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.container {
		// border:1px solid red;
		background-color: #F7F7F7;
		min-height: 100vh;
		.logo {
			width: 296rpx;
			height: 44rpx;
			position: absolute;
			z-index: 9999;
			top: 112rpx;
			left: 32rpx;
		}
		.infor {
			width: 100%;
			height: 408rpx;
			
			&-details {
				margin-top: 216rpx;
				width: 686rpx;
				&-left {
					
					&-avator {
						width: 128rpx;
						height: 128rpx;
						border-radius: 50%;
						border: 1rpx solid #FCE16A;
					}
					&-base {
						color: #222;
						flex-direction: column;
						margin-left: 16rpx;
						height: 128rpx;
						&-name {
							font-size: 36rpx;
							height: 50rpx;
							margin-bottom: 10rpx;
							font-weight: medium;
						}
						&-intro {
							font-size: 24rpx;
						}
					}
				}
				&-right {
					&-items {
						flex-direction: column;
						color: #595959;
						&-icon {
							font-size: 48rpx;
							margin-bottom: 10rpx;
						}
						&-word {
							font-size: 24rpx;
						}
					}
				}
			}
		}
		.vip {
			width: 100%;
			&-content {
				width: 686rpx;
				height: 330rpx;
				margin: 0 auto;
				&-operating {
					width: 686rpx;
					height: 168rpx;
					&-items {
						width: 171rpx;
						flex-direction: column;
						color: #222;
						&-icon {
							font-size: 56rpx;
							color: #222;
						}
						&-word {
							font-size:28rpx;
						}
					}
				}
			}
		}
		.service {
			width: 686rpx;
			height: 96rpx;
			margin: 0 auto;
			margin-top: 32rpx;
		}
		.other-info {
			margin: 0 auto;
			margin-top: 30rpx;
			width: 686rpx;
			flex-direction: column;
			border-radius: 24rpx;
			overflow: hidden;
			background-color: #fff;
			&-items {
				width: 622rpx;
				height: 96rpx;
				line-height: 96rpx;
				color: #474747;
				font-size: 28rpx;
			}
		}
	}
	
</style>