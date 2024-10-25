<template>
	<view class="container">
		<view class="content flex justify-start items-center">
			<view class="pet-info">
				<pet-card></pet-card>
			</view>
			<view class="module report-result" >
				<image :src="mbtiImg" mode="aspectFit" style="border-radius: 24rpx;"></image>
			</view>
			<view class="eval-details module">
				<view class="details-title">测评详情</view>
				<view class="details-content"  style="background-image: url('../../static/images/report/mbti-result.png');">
					<view class="content-mbti">{{reportTitle}}</view>
					<view class="report-list-item-right flex justify-start items-start">
						<view class="report-list-item-right-property flex justify-start items-center" v-for="(item,index) in dimensionsItems" :key="index">
							<view class="report-list-item-right-property-title">{{item.title}}</view>
							<view
								class="report-list-item-right-property-content flex justify-between items-center">
								<view class="report-list-item-right-property-content-left" :class="item.score < 0 ? `color-text-${index}` : `color-gray`">{{item.value}}</view>
								<view class="report-list-item-right-property-content-middle flex items-center" :class="item.score < 0 ? 'justify-start' : 'justify-end'">
									<view class="report-list-item-right-property-content-middle-step" :class="`color-${index}`" :style="{'width':item.score+'%;'}"></view>
								</view>
								<view class="report-list-item-right-property-content-right" :class="item.score > 0 ? `color-text-${index}` : `color-gray`">{{item.reverse_value}}</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="result-item module" v-for="(item,index) in dimensionsItems" :key="index">
				<view class="item-title flex justify-start items-center">
					<view class="title-left">{{item.title}}</view>
					<view class="title-right" :class="`color-text-${index}`">{{item.value}}</view>
				</view>
				<view class="item-details">
					{{item.text}}
				</view>
				<view class="item-sug">建议</view>
				<view class="sug-content">
					{{item.suggest}}
				</view>
			</view>
			
			<view class="module program">
				<view class="program-bg flex justify-center items-center image-bg" style="background-image: url('http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/WK1GvrB7jcsnJf8NbCH7jAUhWREp4CmnXl5ARW7P.png');"></view>
				<view class="program-title">根据 <span style="font-weight: bold;">花花</span> 的测评结果推荐以下商品</view>
				<view class="program-list flex justify-between items-center">
					<view class="program-item" v-for="(item,index) in productList" :key="index">
						<product-card @handleBuyNow="buyNow(item)" :title="item.title" :intro="item.intro" :pictures="item.pictures[0]" :price="item.price * 0.01"></product-card>
					</view>
				</view>
			</view>
		</view>
		<view class="service-qrcode">
			<image src="http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/7Tz2CqszkkrCwJVQzvWSRay4vaqRoIbMoJzyw1Aq.png" mode=""></image>
		</view>
		<view class="service-word">
			添加专属客服，获取正确的医疗指导
		</view>
		<view class="share flex justify-center items-center">
			<view class="share-button flex justify-center items-center" @click="handleShare()">
				转发到朋友圈
			</view>
		</view>
	</view>
</template>

<script setup>
	import petCard from '../../components/petCard.vue';
	import productCard from '../../components/productCard.vue';
	import { onLoad } from '@dcloudio/uni-app'
	import {ref,onMounted} from 'vue'
	import { allProduct,createOrder,pay,reportDetails} from '@/services/api.js'
	let reportId = ref('')
	let dimensionsItems = ref([])
	let reportTitle = ref('')
	let cardId = ref('')
	let mbtiImg = ref('')
	let handleShare = () =>{
		console.log('点击了分享')
		uni.share({
			provider: "weixin",
			scene: "WXSceneTimeline",
			type: 1,
			// href: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/7Tz2CqszkkrCwJVQzvWSRay4vaqRoIbMoJzyw1Aq.png",
			title: "喵博士 X 汪博士",
			summary: "我正在使用喵博士 X 汪博士进行爱宠MBTI测试，赶紧跟我一起来体验！",
			imageUrl: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/7Tz2CqszkkrCwJVQzvWSRay4vaqRoIbMoJzyw1Aq.png",
			success: function (res) {
				console.log("success:" + JSON.stringify(res));
			},
			fail: function (err) {
				console.log("fail:" + JSON.stringify(err));
			}
		});
	}
	let getReportDeatils = async (reportId) => {
		uni.showLoading({
			title: '正在加载...'
		})
		let result = await reportDetails(reportId)
		uni.hideLoading()
		console.log("报告详情",result)
		dimensionsItems.value = result.data.data.dimensions
		reportTitle.value = result.data.data.assessment.title
		mbtiImg.value = result.data.data.image
		productList.value = result.data.data.products
		console.log(productList.value[0].pictures[0])
	}
	let productList = ref([])
	let buyNow = async (item) => {
		console.log("点解购买按钮", item)
		uni.showLoading({
			title:"创建订单..."
		})
		let res = await createOrder({item_id: item.id, quantity: 1})
		let payResult = await pay({order_sn: res.data.data.order_sn})
		 uni.requestPayment({
		       "timeStamp": payResult.data.data.timeStamp,
		       "nonceStr": payResult.data.data.nonceStr,
		       "package": payResult.data.data.package,
		       "signType": payResult.data.data.signType,
		       "paySign": payResult.data.data.paySign,
		       "success":function(res){
		     console.log('success', res);
			 uni.hideLoading()
		    },
		       "fail":function(res){
		     console.log('fail', res);
			 uni.hideLoading()
		    },
		       "complete":function(res){
		     console.log('complete', res);
			 uni.hideLoading()
		    }
		  });
		
		// console.log(payRes, '支付')
		// console.log('创建订单', res)
	}
	onMounted(() => {
		getReportDeatils(reportId.value)
	})
	onLoad((options) => {
		console.log(options); // { id: '123', name: '张三' }
		reportId.value = options.reportId
		cardId.value = options.cardId
		console.log(reportId.value)
	})
</script>

<style lang="scss" scoped>
	.share {
		position: fixed;
		left: 0;
		bottom: 60rpx;
		width: 100%;
		height: 92rpx;
		
	}
	.share-button {
		width: 486rpx;
		height: 92rpx;
		background-color: #222;
		color: #faad14;
		border-radius: 24rpx;
	}
	.container {
		min-height: 100vh;
		background-color: #F5F5F5;
		padding-bottom: 140rpx;
		.content{
			width: 1005;
			min-height: 100vh;
			flex-direction: column;
			.module {
				overflow: hidden;
				border-radius: 24rpx;
				background-color: #fff;
				padding: 28rpx;
				width: 630rpx;
				margin-bottom: 28rpx;
			}
			.pet-info {
				margin-top: 32rpx;
				width: 622rpx;
				height: 220prx;
			}
			.report-result {
				margin-top: -20rpx;
				width: 686rpx;
				height: 805rpx;
				// border: 1px solid red;
				// background-color: #fff;
				margin-bottom: 52rpx;
				overflow: hidden;
				padding: 0;
				background-color: transparent !important;
				
			}
			.eval-details {
				// width: 686rpx;
				.details-title {
					font-size: 36rpx;
					color: #222;
					margin-bottom: 20rpx;
					
				}
				.details-content {
					width: 582rpx;
					padding: 24rpx;
					border-radius: 24rpx;
					.content-mbti {
						font-size: 40rpx;
						color: #222;margin-bottom: 32rpx;
					}
				}
				.report-list-item-right {
					flex-direction: column;
					width: 582rpx;
					&-property {
						width: 582rpx;
						margin-bottom: 28rpx;
						// border: 1px solid red;
						&-title {
							// color: #8c8c8c;
							font-size: 24rpx;
							margin-right: 40rpx;
						}
								
						.report-list-item-right-property-content {
							// flex: 1;
							height: 20rpx;
							// border: 1px solid blue;
							&-left {
								// color: #faad14;
								font-size: 24rpx;
							}
								
							&-middle {
								width: 420rpx;
								height: 20rpx;
								border-radius: 4rpx;
								background-color: #e5e5e5;
								margin: 0 8rpx;
								// border: 1px solid red;
								&-step {
									width: 200rpx;
									height: 20rpx;
									border-radius: 4rpx;
									
								}
							}
								
							&-right {
								// color: #8c8c8c;
								
								font-size: 24rpx;
							}
						}
					}
				}
			}
			.result-item {
				.item-title{
					margin-bottom: 24rpx;
					color:#222;
					font-size: 36rpx;
					.title-right {
						// color: #FAAD14;
					}
				}
				.item-details {
					margin-bottom: 40rpx;
					color: #595959;
					font-size: 32rpx;
				}
				.item-sug {
					margin-bottom: 24rpx;
					color:#222;
					font-size: 36rpx;
				}
				.sug-content {
					color: #595959;
				}
			}
			.program {
				// padding-top: 68rpx;
				// position: relative;
				.program-bg {
					// position: absolute;
					// left:0;
					// margin-top: -100rpx;
					width: 200rpx;
					height: 76rpx;
					z-index: 100;
				}
				.program-title {
					color: #222;
					font-size: 32rpx;
					margin-bottom: 28rpx;
				}
				.program-list {
					flex-wrap: wrap;
				}
				.program-item {
					width: 303rpx;
					border-radius: 24rpx;
					overflow: hidden;
					background-color: #F5F5F5;
					margin-bottom: 24rpx;
				}
			}
		}
		.service-qrcode {
			background-color: #fff;
			border-radius: 24rpx;
			border:1rpx solid #222;
			padding: 24rpx;
			width: 210rpx;
			height: 210rpx;
			margin-top: 60rpx;
			margin: 0 auto;
		}
		.service-word {
			margin: 0 auto;
			margin-top: 34rpx;
			margin-bottom: 34rpx;
			text-align: center;
			color: #222;
		}
	}
	.color-0 {
		background-color: #faad14;
		color: #faad14;
	}
	.color-1{
		background-color: #3B8AFA;
		color: #3B8AFA;
	}
	.color-2 {
		background-color: #F15912;
		color: #F15912;
	}
	.color-3 {
		background-color: #AA60FA;
		color: #AA60FA;
	}
	.color-text-0 {
		color: #faad14;
	}
	.color-text-1{
		color: #3B8AFA;
	}
	.color-text-2 {
		color: #F15912;
	}
	.color-text-3 {
		color: #AA60FA;
	}
	.color-gray {
		color: #8c8c8c;
	}
</style>