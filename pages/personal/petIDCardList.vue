<template>
	<view class="container flex justify-end items-center">
		<view class="content flex justify-start items-center">
			<view class="content-title flex justify-between items-center">
				<view class="content-title-left flex justify-start items-center">
					<view class="content-title-left-return flex justify-center items-center">
						<view class="content-title-left-return-icon icon iconfont icon-return"></view>
					</view>
					<view class="content-title-left-word">
						爱宠身份证
					</view>
				</view>
				<view class="content-title-right flex justify-end items-center" v-show="cardList.length !== 0">
					<view style="font-size: 20rpx;">左滑可删除身份证</view>
					<!-- <view class="content-title-right-operating flex justify-start items-center">
						<view class="content-title-right-operating-icon icon iconfont icon-setting"></view>
						<view class="content-title-right-operating-word">管理</view>
					</view>
					<view class="content-title-right-operating flex justify-start items-center" style="margin-left: 46rpx;">
						<view class="content-title-right-operating-icon icon iconfont icon-add"></view>
						<view class="content-title-right-operating-word">新增</view>
					</view> -->
				</view>
			</view>
			<view class="content-list" v-if="cardList.length !== 0">
				<uni-swipe-action class="flex justify-start items-center">
					<view v-for="(item, index) in cardList" :key="index" class="content-list-item"
						@click="handleCard(item)">
						<uni-swipe-action-item :right-options="options1" @click="bindClick(item.id)" @change="change">
							<pet-card :name="item.name" :breed="item.breed.name" :sex="item.sex"
								:time="item.birth_at"></pet-card>
						</uni-swipe-action-item>
					</view>
				</uni-swipe-action>

			</view>
			<view v-if="cardList.length === 0" class="content-empty flex justify-center items-center">
				<view class="content-empty-word">暂无内容</view>
				<view class="content-empty-button flex justify-center items-center">
					<view class="content-empty-button-icon icon iconfont icon-add"></view>
					<view class="content-empty-button-word">新增</view>
				</view>
			</view>
			<view @click="toAddCard()" class="empty flex justify-center items-center">
				新增宠物身份证
			</view>

		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import petCard from '../../components/petCard.vue';
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		login,
		petCards,deletePet
	} from '@/services/api.js'
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
	let assessmentId = ref('')
	onLoad((options) => {
		console.log(options); // { id: '123', name: '张三' }
		if (options.assessmentId) {
			assessmentId.value = options.assessmentId
			console.log(assessmentId.value)
		}


	})
	let toAddCard = () => {
		uni.navigateTo({
			url: `/pages/personal/identityInfo?assessmentId=${assessmentId.value}`
		})
	}
	let handleCard = (item) => {
		uni.navigateTo({
			url: `/pages/home/mbti_questiton?cardId=${item.id}&assessmentId=${assessmentId.value}`
		})
	}
	let bindClick = async (e) => {
		
		
		
			uni.showLoading({
				title: '正在删除...'
			})
			try {
				console.log(e);
				let res = await deletePet(e)
				uni.showToast({
					title: '删除成功',
					icon:'none',
					duration: 6000
				})
				let petCardsList = await petCards()
				cardList.value = petCardsList.data.data
				uni.hideLoading()
			} catch(err) {
				console.log(err)
				uni.hideLoading()
				uni.showToast({
					title: '删除失败，请重试',
					icon:'none',
					duration: 6000
				})
			}
		
		
	}
	onMounted(async () => {
		uni.hideLoading({
			title: '正在加载...'
		})
		let petCardsList = await petCards()
		uni.hideLoading()
		console.log(petCardsList.data.data.length, petCardsList)
		cardList.value = petCardsList.data.data
		console.log(cardList.value)
	})
</script>

<style lang="scss" scoped>
	.empty {
		color: #FCE068;
		font-size: 32rpx;
		background-color: #222;
		width: 324rpx;
		height: 92rpx;
		border-radius: 24rpx;
		margin: 0 auto;
	}

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
				// height: 136rpx;
				margin: 40rpx 0;

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
				max-height: 1228rpx;
				overflow-y: scroll;

				&-item {
					width: 686rpx;
					margin-bottom: 32rpx;
					border-radius: 16rpx;
					overflow: hidden;
				}
			}

			&-empty {
				flex-direction: column;
				margin-top: 200rpx;

				&-word {
					color: #8c8c8c;
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

		.content-list {
			width: 686rpx;
			margin: 0 auto;

			&-item {
				width: 686rpx;
				border-radius: 24rpx;
				overflow: hidden;
				// border: 1px solid red;
			}
		}
	}
</style>