<template>
	<div class="container flex justify-end items-center">
		<div class="content flex justify-start items-center">
			<div class="content-title flex justify-between items-center">
				<div class="content-title-left flex justify-start items-center">
					<div class="content-title-left-return flex justify-center items-center">
						<div class="content-title-left-return-icon icon iconfont icon-return"></div>
					</div>
					<div class="content-title-left-word">
						爱宠身份证
					</div>
				</div>
				<div class="content-title-right flex justify-end items-center" v-show="cardList.length !== 0">
					<div class="content-title-right-operating flex justify-start items-center">
						<div class="content-title-right-operating-icon icon iconfont icon-setting"></div>
						<div class="content-title-right-operating-word">管理</div>
					</div>
					<div class="content-title-right-operating flex justify-start items-center" style="margin-left: 46rpx;">
						<div class="content-title-right-operating-icon icon iconfont icon-add"></div>
						<div class="content-title-right-operating-word">新增</div>
					</div>
				</div>
			</div>
			<div class="content-list" v-show="cardList.length !== 0">
				<div class="content-list-item" v-for="(item,index) in cardList" :key="index">
					<pet-card></pet-card>
				</div>
			</div>
			<div v-if="cardList.length === 0" class="content-empty flex justify-center items-center">
				<div class="content-empty-word">暂无内容</div>
				<div class="content-empty-button flex justify-center items-center">
					<div class="content-empty-button-icon icon iconfont icon-add"></div>
					<div class="content-empty-button-word">新增</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	import petCard from '../../components/petCard.vue';
	let cardList = ref([])
</script>

<style lang="scss" scoped>
	.container {
		min-height: 100vh;
		background-color: #f0f0f0;
		flex-direction: column;
		.content {
			width: 100%;
			height: 1200rpx;
			
			flex-direction: column;
			background-color: #fff;
			border-top-right-radius: 32rpx;
			border-top-left-radius: 32rpx;
			&-title {
				width: 686rpx;
				height: 136rpx;
				&-left {
					&-return {
						width: 48rpx;
						height: 48rpx;
						border-radius: 50%;
						background-color: #e8edf0;
						color: #5f6a7a;
						font-size: 24rpx;
					}
					&-word {
						color: #222;
						font-size: 32rpx;
						margin-left: 24rpx;
					}
				}
				&-right {
					color: #DE5516;
					&-operating {
						&-icon {
							font-size: 28rpx;
							margin-right: 6rpx;
						}
						&-word {
							font-size: 32rpx;
						}
					}
				}
			}
			&-list {
				width: 686rpx;
				&-item {
					width: 686rpx;
					margin-bottom: 32rpx;
					border-radius: 16rpx;
					overflow: hidden;
				}
			}
			&-empty {
				flex-direction: column;
				margin-top: 100rpx;
				&-word {
					color: #222;
					font-size: 32rpx;
					margin-bottom: 39rpx;
				}
				&-button {
					width: 218rpx;
					height: 92rpx;
					color: #FCE068;
					background-color: #222;
					border-radius: 24rpx;
					&-word {
						margin-left: 10rpx;
					}
				}
			}
		}
	}
</style>