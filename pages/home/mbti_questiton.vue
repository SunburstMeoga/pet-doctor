<template>
	<div class="container flex justify-start items-center">
		<!-- <div class="content"> -->
			<swiper class="swiper-box flex justify-start items-center" @change="change" :current="currentQuestion" >
				<swiper-item v-for="(item, index) in questionItems" :key="index" @touchmove.stop>
					<div class="content">
						<div class="content-theme flex justify-start items-center">
							<div class="content-theme-number flex justify-center items-center">
								<div class="content-theme-number-current">0{{index + 1}} </div>
							
								<div class="content-theme-number-total"> / {{questionItems.length <= 9 ? '0' + questionItems.length : questionItems.length }}</div>
							</div>
							<!-- <div class="content-theme-type">【基本信息】</div> -->
						</div>
						<div class="content-question">
							<div class="content-question-title">{{item.title}}</div>
							<div class="content-question-options">
								<div @click="handleOptions(_item,item,index)" 
								class="content-question-options-item" 
								:class="_item.id === item.selectid ? 'content-question-options-item-active' : 'content-question-options-item-unactive'" 
								v-for="(_item,_index) in item.answers" :key="_index">
									<!-- <div class="content-question-options-item-title">{{item.title}}</div> -->
									<div class="content-question-options-item-content">{{_item.text}}</div>
								</div>
							</div>
						</div>
					</div>
				</swiper-item>
			</swiper>
		<!-- </div> -->
		
		<div  v-if="!selectedOption && currentQuestion === 0" class="go-back flex justify-center items-center">
			<div class="go-back-button">
				返回
			</div>
		</div>
		<div  v-if="currentQuestion !== 0 && currentQuestion !== questionItems.length - 1" class="go-back flex justify-center items-center">
			<div class="go-back-button" @click="toPreQuestion()">
				返回上一题
			</div>
		</div>
		<div v-if="currentQuestion === questionItems.length - 1" class="go-back last-question  flex justify-around items-center">
			<div class="go-back-check" @click="toPreQuestion()">上一题</div>
			<div class="go-back-result">
				查看结果
			</div>
		</div>
	</div>
</template>

<script setup>
	import {assessmentDetails} from '../../services/api.js'
	import { onLoad } from '@dcloudio/uni-app'
	import {
		ref,
		getCurrentInstance,
		onMounted
	} from 'vue'
	let optionsItems = ref([])
	let questionItems = ref([])
	let selectedOption = ref(null)
	let currentQuestion = ref(0)
	let answerids = ref([])
	let cardId = ref('')
	let assessmentId = ref('1')
	let filteredData = ref([])
	let selectedIds = ref([])
	// let swiperDotIndex = ref(0)
	
	let change = (e) => {
		currentQuestion.value = e.detail.current;
		console.log(currentQuestion.value)
	}
	let toPreQuestion = () => {
		currentQuestion.value = --currentQuestion.value
		console.log(currentQuestion.value)
	}
	let handleOptions = (_item, item, index) => {
		questionItems.value[index].selectid = _item.id
		// let uniqueArr = [...new Set(filteredData.value)]
		updateSelectedIds()
		if(currentQuestion.value < questionItems.value.length) {
			currentQuestion.value = ++currentQuestion.value
		}
	}
	let updateSelectedIds = () => {
		filteredData.value = questionItems.value.map(item => item.selectid);
		selectedIds.value = [...new Set(filteredData.value)]
		  console.log("新的数组：", selectedIds.value);
	}
	//获取问题列表
	let getAssessmentDetails = async (assessmentType) => {
		try {
			const result = await assessmentDetails(assessmentType);
			questionItems.value = result.data.data.questions
			questionItems.value.map(item => {
				item.selectid = null
			})
			console.log(questionItems.value)
		} catch (err) {
			console.log(err)
		}
	}
	onMounted(() => {
		getAssessmentDetails(assessmentId.value)
	})
	onLoad((options) => {
		console.log(options); // { id: '123', name: '张三' }
		cardId.value = options.cardId
		console.log(cardId.value)
		// if(cardId.value) {
		// 	uni.navigateTo({
		// 		url: `/pages/home/mbti_questiton?cardId=${cardId.value}`
		// 	})
		// }
	})
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		color: #222;
		flex-direction: column;
		.swiper-box {
			width: 100%;
			min-height:100vh;
			flex-direction: column;
		}
		.content {
			padding-top: 80rpx;
			width: 622rpx;
			margin: 0 auto;
			&-theme {
				width: 100%;
				margin-bottom: 160rpx;
				&-number {
					border: 1rpx solid #222;
					border-radius: 49%;
					width: 268rpx;
					height: 106rpx;
					&-current {
						font-weight: bold;
						font-size: 72rpx;
					}
					&-total {
						font-size: 40rpx;
						color: #8c8c8c;
					}
				}
				&-type {
					margin-left: 8rpx;
					font-size: 40rpx;
				}
			}
			&-question {
				width: 622rpx;
				&-title {
					font-size: 48rpx;
					margin-bottom: 96rpx;
					width: 480rpx;
				}
				&-options {
					width: 622rpx;
					&-item {
						width:100%;
						border-radius: 24rpx;

						text-align: center;
						padding: 24rpx 0;
						margin-bottom: 64rpx;
						&-title {
							font-size: 36rpx;
							margin-bottom: 8rpx;
							font-weight: medium;
						}
						&-content {
							font-size: 28rpx;
						}
					}
				}
			}
		}
		.go-back {
			position: fixed;
			left: 0;
			bottom: 88rpx;
			width: 100%;
			&-button {
				width: 486rpx;
				height: 92rpx;
				background-color: #222;
				color: #fce068;
				font-size: 32rpx;
				text-align: center;
				line-height: 92rpx;
				border-radius: 24rpx;
			}
			&-check {
				width: 200rpx;
				height: 92rpx;
				background-color: #f0f0f0;
				color: #222;
				font-size: 32rpx;
				text-align: center;
				line-height: 92rpx;
				border-radius: 24rpx;
			}
			&-result {
				width: 462rpx;
				height: 92rpx;
				background-color: #222;
				color: #fce068;
				font-size: 32rpx;
				text-align: center;
				line-height: 92rpx;
				border-radius: 24rpx;
			}
		}
	}
	.content-question-options-item-active {
		background-color: rgba(252,224,104, .1);
		border: 1rpx solid #FCE068;
		color:#222;
	}
	.content-question-options-item-unactive {
		background-color: #f5f5f5;
		border: 1rpx solid #f5f5f5;
		color:#8c8c8c;
	}
</style>