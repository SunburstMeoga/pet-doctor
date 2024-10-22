<template>
	<div class="container">
		<div class="content flex justify-start  items-center">
			<div class="content-tab flex jus items-center">
				<div class="tab-item" v-for="(item,index) in activityItems" :key="index">
					{{item.title}}
				</div>
			</div>
			<div class="content-list flex justify-start items-center">
				<div class="list-item" v-for="(item,index) in 3" :key="index">
					<order-card></order-card>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	import OrderCard from '../../components/orderCard.vue';
	let activityItems = ref([{id:1, title: '团购活动'}, {id: 2, title: '线下活动'}])
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		min-height: 100vh;
		background-color: rgb(245, 245, 245);
		.content {width: 100%;
			flex-direction: column;
			&-tab {
				height: 56rpx;
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