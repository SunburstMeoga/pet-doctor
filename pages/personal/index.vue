<template>
	<view class="container">
		<view class="logo">
			<image mode="aspectFit" src="/static/images/logo.png" alt="" />
		</view>
		<view class="infor flex justify-center items-center image-bg"
			style="background-image: url('http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/TomWHO3jqHYSMV4f0KosXrrxe1tKiVEIy7ODUQ8B.png');">
			<view class="infor-details flex justify-between items-center">
				<view class="infor-details-left flex justify-start items-start">
					<view class="infor-details-left-avator"></view>
					<view class="infor-details-left-base flex justify-center items-start">
						<view class="infor-details-left-base-name">Petting</view>
						<view class="infor-details-left-base-intro">喵博士 X 汪博士</view>
					</view>
				</view>
				<view class="infor-details-right flex justify-end items-center">
					<!-- <view class="infor-details-right-items flex justify-start items-center" style="margin-right: 32rpx;">
						<view class="infor-details-right-items-icon icon iconfont icon-dizhiguanli"></view>
						<view class="infor-details-right-items-word">收货地址</view>
					</view>
					<view class="infor-details-right-items flex justify-start items-center">
						<view class="infor-details-right-items-icon icon iconfont icon-icon-test"></view>
						<view class="infor-details-right-items-word">个人资料</view>
					</view> -->
					<button v-if="!isLogged" class="login flex justify-center items-center" @click="toLogin()">
						登录账号
					</button>
				</view>
			</view>
		</view>
		<view class="vip">
			<view class="vip-content image-bg flex justify-center items-end"
				style="background-image: url('http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/vwD88eHIzONfShetrgShdgPfJahajNFmSbg1FHL0.png');">
				<view class="vip-content-operating flex justify-between items-center">
					<view class="vip-content-operating-items flex justify-center items-center" @click="handleOrder('0')">
						<view class="vip-content-operating-items-icon icon iconfont icon-daifukuan"></view>
						<view class="vip-content-operating-items-word">待付款</view>
					</view>
					<view class="vip-content-operating-items flex justify-center items-center" @click="handleOrder('1')">
						<view class="vip-content-operating-items-icon icon iconfont icon-daifahuo"></view>
						<view class="vip-content-operating-items-word">待发货</view>
					</view>
					<view class="vip-content-operating-items flex justify-center items-center" @click="handleOrder('2')">
						<view class="vip-content-operating-items-icon icon iconfont icon-daishouhuo"></view>
						<view class="vip-content-operating-items-word">待收货</view>
					</view>
					<view class="vip-content-operating-items flex justify-center items-center" style="width: 172rpx;" @click="handleOrder(null)">
						<view class="vip-content-operating-items-icon icon iconfont icon-shouye"></view>
						<view class="vip-content-operating-items-word">全部</view>
					</view>
				</view>

			</view>
		</view>
		<view class="service image-bg"
			style="background-image: url('http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/OjTrhJAdrMLyrYxEvW60FiQBXIvzkWZ1g6qKb4Vj.png');">

		</view>
		<view class="other-info flex items-center">
			<view class="other-info-items" style="border-bottom: 1rpx solid #E6E6E6" @click="toPetList">爱宠身份证</view>
			<view class="other-info-items">喵汪博士隐私申明</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,onMounted
	} from 'vue'
	import {
		login
	} from '@/services/api.js'
	onMounted(() => {
		if(uni.getStorageSync('token')) {
			isLogged.value = true
		}
	})
	let isLogged = ref(false)
	let handleOrder = (status) => {
		if(!uni.getStorageSync('token')) {
			uni.showToast({
				title: '请先登录',
				icon: 'none'
			})
			return
		}
		uni.navigateTo({
			url:`/pages/personal/orders?status=${status}`
		})
	}
	let toPetList = () => {
		uni.navigateTo({
			url: '/pages/personal/petIDCardList'
		})
	}
	let toLogin = async () => {
		uni.showLoading({
			title: '正在登录...',
			mask: true // 是否显示透明蒙层，防止触摸穿透  
		});
		let code, encryptedData, iv
		// 仅在用户点击按钮或其他交互操作时调用此方法  
		uni.getUserProfile({
			desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中  
			success: (res) => {
				console.log(res)
				if (res.platform === 'devtools') {
					uni.setEnableDebug({
						enableDebug: true
					});
				}
				encryptedData = res.encryptedData
				iv = res.iv
				console.log(encryptedData, iv)
				uni.login({
					provider: 'weixin',
					success: async (loginRes) => {
						console.log('登录成功', loginRes);
						console.log(loginRes.code)
						code = loginRes.code
						try {
							console.log(encryptedData, iv, code)
							const result = await login({
								code: code,
								iv: iv,
								encrypted_data: encryptedData
							})
							console.log(result)
							uni.setStorageSync('token',
								`Bearer ${result.data.data.api_token}`)
							console.log(result.data.data.api_token)
							console.log(uni.getStorageSync('token'))
							uni.hideLoading()
						} catch (err) {
							console.log(err)
							uni.hideLoading();
						}
					},
					fail: (error) => {
						console.error('登录失败', error);
						uni.hideLoading();
					}
				});
			},
			fail: (err) => {
				console.error('获取用户信息失败', err);
				uni.hideLoading();
			}
		});
	}
</script>

<style lang="scss" scoped>
	.container {
		// border:1px solid red;
		background-color: #F7F7F7;
		min-height: 100vh;

		.login {
			width: 200rpx;
			height: 56rpx;
			border-radius: 12rpx;
			background-color: #FCE16A;
			color: #222;
			font-size: 28rpx;
			// display: block;
		}

		.logo {
			width: 296rpx;
			height: 44rpx;
			position: absolute;
			z-index: 9999;
			top: 112rpx;
			left: 32rpx;
		}

		.infor {
			width: 100%;
			height: 408rpx;

			&-details {
				margin-top: 216rpx;
				width: 686rpx;

				&-left {

					&-avator {
						width: 128rpx;
						height: 128rpx;
						border-radius: 50%;
						border: 1rpx solid #FCE16A;
					}

					&-base {
						color: #222;
						flex-direction: column;
						margin-left: 16rpx;
						height: 128rpx;

						&-name {
							font-size: 36rpx;
							height: 50rpx;
							margin-bottom: 10rpx;
							font-weight: medium;
						}

						&-intro {
							font-size: 24rpx;
						}
					}
				}

				&-right {
					&-items {
						flex-direction: column;
						color: #595959;

						&-icon {
							font-size: 48rpx;
							margin-bottom: 10rpx;
						}

						&-word {
							font-size: 24rpx;
						}
					}
				}
			}
		}

		.vip {
			width: 100%;
			margin-top: 24rpx;

			&-content {
				width: 686rpx;
				height: 330rpx;
				margin: 0 auto;
				border-radius: 24rpx;
				overflow: hidden;

				&-operating {
					width: 686rpx;
					height: 168rpx;
					background-color: #fff;

					&-items {
						width: 171rpx;
						flex-direction: column;
						color: #222;

						&-icon {
							font-size: 56rpx;
							color: #222;
						}

						&-word {
							font-size: 28rpx;
						}
					}
				}
			}
		}

		.service {
			width: 686rpx;
			height: 96rpx;
			margin: 0 auto;
			margin-top: 32rpx;
		}

		.other-info {
			margin: 0 auto;
			margin-top: 30rpx;
			width: 686rpx;
			flex-direction: column;
			border-radius: 24rpx;
			overflow: hidden;
			background-color: #fff;

			&-items {
				width: 622rpx;
				height: 96rpx;
				line-height: 96rpx;
				color: #474747;
				font-size: 28rpx;

			}
		}
	}
</style>