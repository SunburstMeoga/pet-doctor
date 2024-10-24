<template>
	<view class="container">
		<view class="content flex justify-start items-center" v-if="ordersLis.length !== 0">
			<view class="content-item" v-for="(item,index) in ordersLis" :key="index">
				<order-card :orderNumber="item.order_sn" :price="item.amount * 0.01" :status="item.status" :count="item.items[0].quantity"></order-card>
			</view>
		</view>
		<view class="empty flex justify-center items-center" v-if="ordersLis.length === 0">
			暂无内容
		</view>
	</view>
</template>

<script setup>
	import {ref,onMounted} from 'vue'
	import OrderCard from '../../components/orderCard.vue'
	import {orders} from '@/services/api.js'
	import { onLoad } from '@dcloudio/uni-app'
	let ordersLis = ref([])
	let orderStatus = ref('')
	let getOrders = async(orderStatus) => {
		console.log('查询的订单状态', orderStatus)
		let res = await orders({status: orderStatus})
		console.log('订单列表' ,res)
		ordersLis.value = res.data.data
	}
	onMounted(() => {
		getOrders(orderStatus.value)
	})
	onLoad((options) => {
		if(options.status) {
			orderStatus.value = options.status
		}
	})
</script>

<style lang="scss">
	.empty {
		width: 100%;
		height: 100vh;
		color: #222;
		font-size: 32rpx;
	}
	.container {
		width: 100%;
		min-height: 100vh;
		background-color: rgb(245, 245, 245);
		.content {
			width: 100%;
			flex-direction: column;
			overflow-y: scroll;
			padding-top: 60rpx;
			padding-bottom: 60rpx;
			.content-item {
				width: 686rpx;
				margin-bottom: 28rpx;
				border-radius: 24rpx;
				overflow: hidden;
			}
		}
	}
</style>