<template>
	<view class="container">
		<view class="content flex justify-start items-center">
			<view class="content-item" v-for="(item,index) in ordersLis" :key="index">
				<order-card :orderNumber="item.order_sn" :price="item.amount * 0.01" :status="item.status" :count="item.items[0].quantity"></order-card>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref,onMounted} from 'vue'
	import OrderCard from '../../components/orderCard.vue'
	import {orders} from '@/services/api.js'
	let ordersLis = ref([])
	let getOrders = async() => {
		let res = await orders()
		console.log('订单列表' ,res)
		ordersLis.value = res.data.data
	}
	onMounted(() => {
		getOrders()
	})
</script>

<style lang="scss">
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