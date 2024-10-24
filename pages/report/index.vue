<template>
	<view class="container">
		<view class="logo">
			<image mode="aspectFit" src="/static/images/logo.png" alt="" />
		</view>
		<view class="content flex justify-start items-center image-bg"
			style="background-image: url('../../static/images/report/banner.png');">
			<view class="add-service flex justify-between items-center">
				<view class="add-service-hi">
					<image src="/static/images/report/hi.png" mode="aspectFill"></image>
				</view>
				<view class="add-service-title">添加专属客服，获取正确的医疗指导</view>
				<view class="add-service-right">
					<view class="iconfont icon icon-a-duobianxing1"></view>
				</view>
			</view>
			<view class="report">
				<swiper class="swiper-box"   @change="swipeChange" :current="currentReport">
					<swiper-item class="flex justify-center items-center"  v-for="(item, index) in cardList" :key="index">
						<pet-card style="width: 622rpx;" :name="item.name" :breed="item.breed.name" :sex="item.sex" :time="item.birth_at"></pet-card>
					</swiper-item>
				</swiper>

			</view>
		</view>
		<view class="report-list">
			<uni-swipe-action class="flex justify-start items-center">
				<view v-for="(item, index) in 3" :key="index" style="margin-bottom: 32rpx;">
					<uni-swipe-action-item :right-options="options1" @click="bindClick()" @change="change">
						<view class="report-list-item flex justify-start items-center">
							<view class="report-list-item-left">
								<image src="../../static/images/report/mbti-title.png" mode="aspectFill"></image>
							</view>
							<view class="report-list-item-line"></view>
							<view class="report-list-item-right flex justify-start items-start">
								<view class="report-list-item-right-property flex justify-start items-center" v-for="(_item,_index) in 4" :key="_index">
									<view class="report-list-item-right-property-title">外倾性</view>
									<view
										class="report-list-item-right-property-content flex justify-between items-center">
										<view class="report-list-item-right-property-content-left">S</view>
										<view class="report-list-item-right-property-content-middle">
											<view class="report-list-item-right-property-content-middle-step"></view>
										</view>
										<view class="report-list-item-right-property-content-right">I</view>
									</view>
								</view>
							</view>
						</view>
					</uni-swipe-action-item>
				</view>
			</uni-swipe-action>
		</view>

	</view>
</template>
<script setup>
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from 'vue'
	import petCard from '../../components/petCard.vue';
	import {
		// orders,
		petCards,reports
	} from '@/services/api.js'
	let currentReport = ref(0)
	let cardList = ref([''])
	let options1 = ref([{
		text: '删除',
		style: {
			backgroundColor: '#F15912',
			color: '#fff',
			width: '62rpx',
			borderRadius: '16rpx',
			fontSize: '24rpx',
			writingMode: 'tb-rl',
			minHeight: '228rpx'
		}
	}])
	let bindClick = (e) => {
		console.log(e)
		// uni.showToast({
		//  title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
		//  icon: 'none'
		// });
	}
	let swipeChange = async (e) => {
		console.log(e)
		console.log(currentReport.value)
		let resReport = await reports({pet_card_id: cardList.value[currentReport.value].id})
		console.log('切换轮播图之后的宠物id', cardList.value[currentReport.value].id)
		console.log('切换轮播图之后的报告', resReport)
	}
	
	onMounted(async () => {
		let petCardsList = await petCards()
		console.log('宠物id',petCardsList.data.data[0].id)
		let resReport = await reports({pet_card_id: petCardsList.data.data[0].id})
		console.log(petCardsList.data.data.length,petCardsList)
		cardList.value = petCardsList.data.data
		console.log(cardList.value)
		console.log('报告',resReport)
	})
</script>

<style lang="scss" scoped>
	.container {
		// border:1px solid red;
		min-height: 100vh;
	}

	.content {
		position: relative;
		width: 100%;
		flex-direction: column;
		border-radius: 50% / 10%;
		border-top-right-radius: 0%;
		border-top-left-radius: 0%;
		overflow: hidden;

		.swiper-box {
			width: 750rpx;
			height: 220rpx;
			flex-direction: column;
			// border: 1px solid red;
		}

		.swiper-item {
			width: 622rpx;
			height: 220rpx;
			text-align: center;
			line-height: 220rpx;
		}
	}

	.card-info {
		padding: 32rpx;
		// border: 1px solid blue;
		color: #222;

		.diamond {
			width: 20rpx;
			height: 20rpx;
			background-color: #de5516;
			transform: rotate(45deg);
		}

		&-name {
			color: black;
			margin-bottom: 40rpx;
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

	.report-list {
		width: 670rpx;
		flex-direction: column;
		margin: 0 auto;
		margin-top: 34rpx;

		&-item {
			width: 670rpx;
			min-height: 172rpx;
			background-color: #F7F7F7;
			border-radius: 16rpx;
			padding: 28rpx 0;
			

			&-left {
				width: 100rpx;
				height: 78rpx;
				margin: 0 34rpx;
			}

			&-line {
				height: 172rpx;
				width: 1rpx;
				margin-right: 16rpx;
				background-color: #c8c8c8;
			}

			&-right {
				flex-direction: column;
				flex: 1;

				&-property {
					flex: 1;

					// border: 1px solid red;
					&-title {
						color: #8c8c8c;
						font-size: 24rpx;
						margin-right: 40rpx;
					}

					&-content {
						width: 340rpx;
						height: 20rpx;

						// border: 1px solid blue;
						&-left {
							color: #faad14;
							font-size: 24rpx;
						}

						&-middle {
							flex: 1;
							height: 20rpx;
							border-radius: 4rpx;
							background-color: #e5e5e5;
							margin: 0 8rpx;

							// border: 1px solid red;
							&-step {
								width: 200rpx;
								height: 20rpx;
								border-radius: 4rpx;
								background-color: #faad14;
							}
						}

						&-right {
							color: #8c8c8c;

							font-size: 24rpx;
						}
					}
				}
			}
		}
	}

	.logo {
		width: 296rpx;
		height: 44rpx;
		position: absolute;
		z-index: 9999;
		top: 112rpx;
		left: 32rpx;
	}

	.add-service {
		width: 686rpx;
		height: 88rpx;
		background-color: #fff;
		border-radius: 24rpx;
		color: #222;
		margin-top: 208rpx;
		margin-bottom: 32rpx;

		&-hi {
			width: 80rpx;
			height: 80rpx;
			margin-top: -40rpx;
			margin-left: 28rpx;
		}

		&-title {
			font-size: 28rpx;
		}

		&-right {
			font-size: 22rpx;
			margin-right: 28rpx;
		}
	}
</style>