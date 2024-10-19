<template>
	<div class="swiper-item image-bg"
		style="background-image: url('../../static/images/report/card-male.png');">
		<div class="card-info">
			<div class="edit flex justify-center items-center" v-if="showEdit">
				<div class="icon iconfont icon-bianji"></div>
			</div>
			<div class="card-info-name flex justify-start items-center">花花</div>
			<div class="card-info-property flex justify-start items-center">
				<div class="diamond"></div>
				<div class="card-info-property-variety">布偶 | 妹妹</div>
				<div class="card-info-property-gender icon iconfont icon-cixing"></div>
			</div>
			<div class="card-info-date flex justify-start items-center">
				<div class="diamond"></div>
				<div class="card-info-date-number">2023/09/12</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {ref,defineProps} from 'vue'
	const props = defineProps({
		showEdit: {
			type: Boolean,
			deafult: false
		}
	})
</script>

<style lang="scss" scoped>
	.swiper-item {
		width: 100%;
		height: 220rpx;
		
		
	}
	.card-info {
		padding: 32rpx;
		// border: 1px solid blue;
		color: #222;
		position: relative;
		.edit {
			position: absolute;
			width: 56rpx;
			height: 56rpx;
			border-radius: 50%;
			background-color: #222;
			right: 28rpx;
			bottom: 28rpx;
			.icon {
				font-size: 32rpx;
				color: #FCE068;
			}
		}
		.diamond {
			width: 20rpx;
			height: 20rpx;
			background-color: #de5516;
			transform: rotate(45deg);
		}
	
		&-name {
			color: black;
			margin-bottom: 30rpx;
			font-size: 16rpx;
			// border: 1px solid orchid;
			height: 18rpx;
			font-weight: bolder;
		}
	
		&-property {
			margin-bottom: 26rpx;
			height: 40rpx;
			
			&-variety {
				font-size: 28rpx;
				margin: 0 12rpx;
			}
	
			&-gender {
				font-size: 32rpx;
				color: #FF6D6D;
			}
		}
	
		&-date {
			height: 40rpx;
	
			&-number {
				margin-left: 12rpx;
			}
		}
	}
</style>