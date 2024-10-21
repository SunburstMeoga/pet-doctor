<template>
	<div class="container">
		<div class="content flex justify-start items-center">
			<div class="pet-info">
				<pet-card></pet-card>
			</div>
			<div class="report-result module">
				
			</div>
			<div class="eval-details module">
				<div class="details-title">测评详情</div>
				<div class="details-content"  style="background-image: url('../../static/images/report/mbti-result.png');">
					<div class="content-mbti">MBTI</div>
					<div class="report-list-item-right flex justify-start items-start">
						<div class="report-list-item-right-property flex justify-start items-center" v-for="(_item,_index) in 4" :key="_index">
							<div class="report-list-item-right-property-title">外倾性</div>
							<div
								class="report-list-item-right-property-content flex justify-between items-center">
								<div class="report-list-item-right-property-content-left">S</div>
								<div class="report-list-item-right-property-content-middle">
									<div class="report-list-item-right-property-content-middle-step"></div>
								</div>
								<div class="report-list-item-right-property-content-right">I</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div class="result-item module">
				<div class="item-title flex justify-start items-center">
					<div class="title-left">外倾性：</div>
					<div class="title-right">E</div>
				</div>
				<div class="item-details">
					四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，
				</div>
				<div class="item-sug">建议</div>
				<div class="sug-content">四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容</div>
			</div>
			<div class="result-item module">
				<div class="item-title flex justify-start items-center">
					<div class="title-left">外倾性：</div>
					<div class="title-right">E</div>
				</div>
				<div class="item-details">
					四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，
				</div>
				<div class="item-sug">建议</div>
				<div class="sug-content">四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容</div>
			</div>
			<div class="result-item module">
				<div class="item-title flex justify-start items-center">
					<div class="title-left">外倾性：</div>
					<div class="title-right">E</div>
				</div>
				<div class="item-details">
					四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，
				</div>
				<div class="item-sug">建议</div>
				<div class="sug-content">四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容，四肢问题详情内容</div>
			</div>
			<div class="module program ">
				<div class="program-bg flex justify-center items-center image-bg" style="background-image: url('../../static/images/report/nutritional-bg.png');"></div>
				<div class="program-title">根据 <span style="font-weight: bold;">花花</span> 的测评结果推荐以下商品</div>
				<div class="program-list flex justify-between items-center">
					<div class="program-item" v-for="(item,index) in 5" :key="index">
						<product-card></product-card>
					</div>
				</div>
			</div>
		</div>
		<div class="service-qrcode">
			<image src="../../static/logo.png" mode=""></image>
		</div>
		<div class="service-word">
			添加专属客服，获取正确的医疗指导
		</div>
	</div>
</template>

<script setup>
	import petCard from '../../components/petCard.vue';
	import productCard from '../../components/productCard.vue';
</script>

<style lang="scss" scoped>
	.container {
		min-height: 100vh;
		background-color: #F5F5F5;
		padding-bottom: 40rpx;
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
				// width: 686rpx;
				height: 805rpx;
				// border: 1px solid red;
				background-color: #fff;
				margin-bottom: 52rpx;
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
							color: #8c8c8c;
							font-size: 24rpx;
							margin-right: 40rpx;
						}
								
						.report-list-item-right-property-content {
							// flex: 1;
							height: 20rpx;
							// border: 1px solid blue;
							&-left {
								color: #faad14;
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
			.result-item {
				.item-title{
					margin-bottom: 24rpx;
					color:#222;
					font-size: 36rpx;
					.title-right {
						color: #FAAD14;
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
				padding-top: 68rpx;
				// position: relative;
				.program-bg {
					// position: absolute;
					margin-top: -38rpx;
					// left: 0;
					width: 200rpx;
					height: 76rpx;
					color: #222;
					font-weight: bolder;
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
</style>