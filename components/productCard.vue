<template>
	<div class="content">
		<div class="content-img">
			<image src="../static/logo.png" mode=""></image>
		</div>
		<div class="content-info">
			<div class="info-title">猫猫喜欢的玩具</div>
			<div class="info-type">狗狗 | 上新 | 满100减10</div>
			<div class="info-price flex justify-start items-start">
				<div class="price-top">￥</div>
				<div class="price-num">50</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		&-img {
			width: 100%;
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