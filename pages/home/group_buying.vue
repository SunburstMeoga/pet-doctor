<template>
	<view class="container">
		<view class="content flex justify-start  items-center">
			<view class="content-tab flex jus items-center">
				<view class="tab-item" v-for="(item,index) in activityItems" :key="index">
					{{item.title}}
				</view>
			</view>
			<view class="content-list flex justify-start items-center">
				<view class="list-item" v-for="(item,index) in productList" :key="index">
					<order-card @handleBuyNow="buyNow(item)" :title="item.title" :intro="item.intro" :tagsItems="item.tags" :price="item.price * 0.01"></order-card>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	import {ref,onMounted} from 'vue'
	import { allProduct,createOrder,pay} from '@/services/api.js'
	import GroupBuyCard from '../../components/GroupBuyCard.vue';
	let activityItems = ref([{id:1, title: '团购活动'}, ])
	let productList = ref([])
	let buyNow = async (item) => {
		console.log("点解购买按钮", item)
		uni.showLoading({
			title:"创建订单..."
		})
		let res = await createOrder({item_id: item.items[0].id, quantity: 1})
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
	let getProductList =  async () => {
		let result = await allProduct()
		console.log('商品列表', result)
		productList.value = result.data.data
	}
	onMounted(() => {
		getProductList()
	})
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		min-height: 100vh;
		background-color: rgb(245, 245, 245);
		.content {width: 100%;
			flex-direction: column;
			&-tab {
				height: 100rpx;
				width: 686rpx;
				.tab-item {
					width: 160px;
					height: 56rpx;
					font-size: 36rpx;
					font-weight: 900;
				}
			}
			.content-list{
				flex-direction: column;
				width: 100%;
				.list-item {
					width: 686rpx;
					border-radius: 24rpx;
					margin-bottom: 28rpx;
					overflow: hidden;
				}
			}
		}
	}
</style>