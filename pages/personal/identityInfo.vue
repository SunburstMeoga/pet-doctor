<template>
	<div class="container flex justify-end items-center">
		<div class="content flex justify-start items-center">
			<div class="content-title flex justify-end items-center">
				<div class="title-right flex justify-center items-center">
					<div class="icon iconfont icon-close"></div>
				</div>
			</div>
			<swiper class="swiper-box flex justify-start items-center" @change="change" :current="currentStep">
				<swiper-item @touchmove.stop>
					<div class="info-one flex justify-start items-center">
						<div class="info-one-name">Hi~ 请填写爱宠昵称(仅支持20个字)</div>
						<div class="info-one-input flex justify-center items-center" style="margin-bottom: 64rpx;">
							<input type="text" placeholder="爱宠昵称" v-model="petName"/>
						</div>
						<div class="info-one-name">Ta的生日</div>
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<div class="info-one-brithday flex justify-between items-center">
								<div class="info-one-brithday-select flex justify-center items-center">
									{{brithDayObj.year}}</div>
								<div class="info-one-brithday-word">年</div>
								<div class="info-one-brithday-select flex justify-center items-center">
									{{brithDayObj.month}}</div>
								<div class="info-one-brithday-word">月</div>
								<div class="info-one-brithday-select flex justify-center items-center">
									{{brithDayObj.day}}</div>
								<div class="info-one-brithday-word">日</div>
							</div>
						</picker>
					</div>
				</swiper-item>
				<swiper-item @touchmove.stop>
					<div class="info-two">
						<div class="info-one-name">Ta属于什么类型</div>
						<div class="pet-type flex justify-between items-center">
							<div @click="handlePetTypeItem(index,item.id)" class="pet-type-item flex justify-end items-end"
								v-for="(item,index) in petTypeItems" :key="index">
								<div class="pet-type-item-left flex justify-center items-center"
									:class="index === selectedPetType ? 'pet-type-item-select' : 'pet-type-item-unselect'">
									<div class="icon iconfont"></div>
								</div>
								<div class="pet-type-item-right"
									:class="index === selectedPetType ? 'pet-type-item-right-select' : 'pet-type-item-right-unselect'">
									{{item.title}}
								</div>
							</div>
						</div>
						<div class="info-one-name">具体是什么品种</div>
						<picker @change="petVarietyChange" :value="index" :range="petTypeRange" range-key="name">
							<div   class="info-one-input flex justify-between items-center" style="margin-bottom: 64rpx;">
								<div class="" style="margin-left: 32rpx; color: #222;">{{selectPetVariety}}</div>
								<div class="icon iconfont icon-a-duobianxing1"></div>
							</div>
						</picker>

						<div class="info-one-gender">弟弟or妹妹</div>
						<div class="gender-type flex justify-start items-center">
							<div @click="handlePetGenderItem(index,item.id)"
								class="gender-type-item flex justify-center items-center"
								:style="index === 0 ? 'margin-right: 40rpx;' : ''"
								:class="index === selectGenderType ? 'gender-select' : 'gender-unselect'"
								v-for="(item,index) in petGenderItems" :key="index">
								<div class="gender-type-item-icon icon iconfont" :class="item.icon"></div>
								<div class="">{{item.title}}</div>
							</div>
						</div>
					</div>
				</swiper-item>
			</swiper>
			<div v-show="currentStep === 0" class="step-one step flex justify-center items-center">
				<div class="step-one-button" @click="toNextStep()">下一步</div>
			</div>
			<div v-show="currentStep === 1" class="step-one step flex justify-center items-center">
				<div class="step-one-button-group flex justify-between items-center">
					<div class="pre" @click="toPreStep()">上一步</div>
					<div class="save" @click="handleSave()">保存修改</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup>
	import {
		ref,
		computed,
		onMounted
	} from 'vue';
	import {storePetCard,petBreeds} from '@/services/api.js'
	
	let petTypeItems = ref([{
		title: '我是猫猫',
		id: 1,
		icon: ''
	}, {
		title: '我是狗狗',
		id: 2,
		icon: ''
	}])
	let petGenderItems = ref([{
		title: '弟弟',
		id: 1,
		icon: 'icon-xiongxing'
	}, {
		title: '妹妹',
		id: 0,
		icon: 'icon-cixing'
	}])
	let brithDayObj = ref({
		year: '',
		month: '',
		day: ''
	})
	let petName = ref(null)
	let selectedPetType = ref(0)
	let currentStep = ref(0)
	let selectGenderType = ref(0)
	let petTypeValue = ref(0)
	let selectPetVariety = ref('请选择')
	let petTypeRange = ref([])
	let brithDay = ref('')
	let breedId = ref(null)
	let sex = ref(1)
	let toPreStep = () => {
		currentStep.value = --currentStep.value
		console.log(currentStep.value)
	}
	let toNextStep = () => {
		if(!petName.value) {
			uni.showToast({
				title: '要先输入爱宠昵称哦~',
				icon:'none'
			})
			return
		}
		currentStep.value = ++currentStep.value
		console.log(currentStep.value)
	}
	let handlePetTypeItem = (index,id) => {
		selectedPetType.value = index
		getPetBreeds(id)
	}
	let handlePetGenderItem = (index,id) => {
		selectGenderType.value = index
		sex.value = id
	}
	let handleSave = async () => {
		if(!breedId.value) {
			uni.showToast({
				title: '还没选择爱宠品种哦~',
				icon:'none'
			})
			return
		}
		uni.showLoading({
			title: '正在保存...',
			mask:true
		})
		try {
			console.log({name: petName.value, sex:sex.value, breed_id: breedId.value,birth_at: brithDay.value})
			// return
			let result = await storePetCard({name: petName.value, sex:sex.value, breed_id: breedId.value,birth_at: brithDay.value})
			console.log(result)
			uni.hideLoading()
			uni.navigateTo({
				url: `/pages/home/star_answer?cardId=${result.data.data.id}`
			})
		} catch(err) {
			uni.hideLoading()
			uni.showModal({
				confirmText:'保存失败,请重试',
				showCancel:false
			})
		}
	}
	let bindDateChange = (e) => {
		console.log(e)
		console.log(e.detail.value)
		brithDay.value = e.detail.value
		const [year, month, day] = e.detail.value.split('-')
		brithDayObj.value = {
			year,
			month,
			day
		}
	}
	let getDate = (type) => {
		const date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;
		day = day > 9 ? day : '0' + day;
		return `${year}-${month}-${day}`;
	}
	let startDate = computed(() => {
		return getDate('start')
	})
	let endDate = computed(() => {
		return getDate('end')
	})
	let petVarietyChange = (e) => {
		console.log('e:', e);
		selectPetVariety.value = petTypeRange.value[e.detail.value].name
		breedId.value = petTypeRange.value[e.detail.value].id
	}
	//获取宠物品种
	let getPetBreeds = async (typeId) => {
		uni.showLoading({
			title: ''
		})
		try {
			let result = await petBreeds(typeId)
			petTypeRange.value = result.data.data
			console.log(result)
			uni.hideLoading()
		} catch (err) {
			console.log(err)
			uni.hideLoading()
		}
	}
	onMounted(() => {
		const currentDate = new Date();
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth() + 1;
		const day = currentDate.getDate();
		const formattedMonth = month < 10 ? '0' + month : month.toString();
		const formattedDay = day < 10 ? '0' + day : day.toString();
		brithDayObj.value = {
			year,
			month: formattedMonth,
			day: formattedDay
		}
		brithDay.value = `${year}-${month}-${day}`
		getPetBreeds(1)
	})
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		min-height: 100vh;
		flex-direction: column;
		background-color: #f0f0f0;

		.content {
			width: 100%;
			height: 1200rpx;

			flex-direction: column;
			background-color: #fff;
			border-top-right-radius: 32rpx;
			border-top-left-radius: 32rpx;
		}

		.content-title {
			width: 670rpx;
			margin-top: 30rpx;

			&-right {
				height: 64rpx;
				width: 64rpx;
				background-color: #595959;
				color: #000;
				margin-top: 20rpx;
				border-radius: 50%;
				font-size: 20rpx;
			}
		}

		.swiper-box {
			width: 100%;
			margin-top: 96rpx;
			height: 800rpx;
			// border: 1px solid red;
		}

		.info-one,
		.info-two {
			width: 670rpx;
			// border: 1px solid blue;
			margin: 0 auto;
			flex-direction: column;

			&-name {
				width: 100%;
				margin-bottom: 31rpx;
				color: #8c8c8c;
				font-size: 32rpx;
			}

			&-input {
				width: 100%;
				height: 98rpx;
				background-color: #f5f5f5;
				border-radius: 24rpx;
				overflow: hidden;

				// border: 1px solid red;
				input {
					background-color: transparent;
					width: 606rpx;
					height: 100%;
					// text-indent: 32rpx;
					color: #000;
				}

				.icon-a-duobianxing1 {
					transform: rotate(90deg);
					color: #8c8c8c;
					margin-right: 32rpx;
					// border: 1px solid blue;
				}
			}

			.info-one-brithday {
				width: 670rpx;

				&-select {
					width: 160rpx;
					height: 98rpx;
					border-radius: 24rpx;
					background-color: #f5f5f5;
					color: #262626;
					font-size: 36rpx;
				}

				&-word {
					color: #595959;
					font-size: 32rpx;
				}
			}

			.pet-type {
				width: 670rpx;
				margin-bottom: 64rpx;

				&-item {
					width: 312rpx;
					height: 120rpx;
					flex-direction: column;
					position: relative;
					border-radius: 24rpx;
					overflow: hidden;

					// border: 1px solid red;
					&-left {
						position: absolute;
						left: 0;
						bottom: 0;
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;

						.icon {
							font-size: 80rpx;
							color: #222;
						}
					}

					&-unselect {
						background-color: #e5e5e5;
					}

					&-select {
						background-color: #FCE068;
					}

					&-right {
						color: #8c8c8c;
						width: 234rpx;
						height: 98rpx;
						// border: 1px solid blue;
						text-align: right;
						line-height: 98rpx;
						padding-right: 32rpx;
						border-radius: 24rpx;
					}

					&-right-unselect {
						background-color: #f5f5f5;
						border: 1rpx solid #f5f5f5;
					}

					&-right-select {
						background-color: rgba(252, 224, 104, 0.1);
						border: 1rpx solid #FCE068;
					}
				}
			}

			&-gender {
				color: #8c8c8c;
				font-size: 32rpx;
				margin-bottom: 30rpx;
			}

			.gender-type {
				&-item {
					flex-direction: column;
					width: 152rpx;
					height: 138rpx;
					border-radius: 24rpx;

					&-icon {
						margin-bottom: 8rpx;
						font-size: 32rpx;
					}

					.icon-cixing {
						color: #FF6D6D;
					}

					.icon-xiongxing {
						color: #3B8AFA;
					}
				}

				.gender-unselect {
					background-color: #f5f5f5;
					border: 1rpx solid #f5f5f5;
					color: #8c8c8c;

				}

				.gender-select {
					background-color: rgba(252, 224, 104, 0.1);
					border: 1rpx solid #FCE068;
					color: #222;
				}
			}

		}

		.step {
			position: fixed;
			bottom: 100rpx;
			left: 0rpx;
			width: 100%;

			&-one-button {
				background-color: #222;
				width: 486rpx;
				height: 92rpx;
				border-radius: 24rpx;
				color: #fcf068;
				font-size: 32rpx;
				text-align: center;
				line-height: 92rpx;
			}

			&-one-button-group {
				width: 670rpx;

				.pre {
					background-color: #f0f0f0;
					width: 200rpx;
					height: 92rpx;
					border-radius: 24rpx;
					color: #222;
					font-size: 32rpx;
					text-align: center;
					line-height: 92rpx;
				}

				.save {
					background-color: #222;
					width: 462rpx;
					height: 92rpx;
					border-radius: 24rpx;
					color: #fcf068;
					font-size: 32rpx;
					text-align: center;
					line-height: 92rpx;
				}
			}
		}
	}
</style>