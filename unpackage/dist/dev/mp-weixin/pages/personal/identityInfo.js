"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "identityInfo",
  setup(__props) {
    let petTypeItems = common_vendor.ref([{
      title: "我是猫猫",
      id: 2,
      icon: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/VR8h0LxNHRCVmWS3RokWTXzwE4UfsaFLIvO3n2dv.png"
    }, {
      title: "我是狗狗",
      id: 1,
      icon: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/bIxJcmxO2l8d0fDhA7x7HOsILJYcs1twjsR4e4Ja.png"
    }]);
    let petGenderItems = common_vendor.ref([{
      title: "弟弟",
      id: 1,
      icon: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/xw5zyhJxcGairwn3f8dP0u84dSynNFNEMpotB1YP.png"
    }, {
      title: "妹妹",
      id: 0,
      icon: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/km2tstUhBbT5PgGv5kMcxrTTWQZOo49Yhz2fqTgs.png"
    }]);
    let brithDayObj = common_vendor.ref({
      year: "",
      month: "",
      day: ""
    });
    let petName = common_vendor.ref(null);
    let selectedPetType = common_vendor.ref(0);
    let currentStep = common_vendor.ref(0);
    let selectGenderType = common_vendor.ref(0);
    common_vendor.ref(0);
    let selectPetVariety = common_vendor.ref("请选择");
    let petTypeRange = common_vendor.ref([]);
    let brithDay = common_vendor.ref("");
    let breedId = common_vendor.ref(null);
    let sex = common_vendor.ref(1);
    let assessmentId = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      console.log(options);
      if (options.assessmentId) {
        assessmentId.value = options.assessmentId;
        console.log(assessmentId.value);
      }
    });
    let toPreStep = () => {
      currentStep.value = --currentStep.value;
      console.log(currentStep.value);
    };
    let toNextStep = () => {
      if (!petName.value) {
        common_vendor.index.showToast({
          title: "要先输入爱宠昵称哦~",
          icon: "none"
        });
        return;
      }
      currentStep.value = ++currentStep.value;
      console.log(currentStep.value);
    };
    let handlePetTypeItem = (index, id) => {
      selectedPetType.value = index;
      selectPetVariety.value = "请选择";
      assessmentId.value = id;
      breedId.value = null;
      getPetBreeds(id);
    };
    let handlePetGenderItem = (index, id) => {
      selectGenderType.value = index;
      sex.value = id;
    };
    let handleSave = async () => {
      if (!breedId.value) {
        common_vendor.index.showToast({
          title: "还没选择爱宠品种哦~",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showLoading({
        title: "正在保存...",
        mask: true
      });
      try {
        console.log({ name: petName.value, sex: sex.value, breed_id: breedId.value, birth_at: brithDay.value });
        let result = await services_api.storePetCard({ name: petName.value, sex: sex.value, breed_id: breedId.value, birth_at: brithDay.value });
        console.log(result);
        common_vendor.index.hideLoading();
        common_vendor.index.navigateTo({
          url: `/pages/home/star_answer?cardId=${result.data.data.id}&assessmentId=${assessmentId.value}`
        });
      } catch (err) {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          confirmText: "保存失败,请重试",
          showCancel: false
        });
      }
    };
    let bindDateChange = (e) => {
      console.log(e);
      console.log(e.detail.value);
      brithDay.value = e.detail.value;
      const [year, month, day] = e.detail.value.split("-");
      brithDayObj.value = {
        year,
        month,
        day
      };
    };
    let getDate = (type) => {
      const date = /* @__PURE__ */ new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    };
    let startDate = common_vendor.computed(() => {
      return getDate("start");
    });
    let endDate = common_vendor.computed(() => {
      return getDate("end");
    });
    let petVarietyChange = (e) => {
      console.log("e:", e);
      selectPetVariety.value = petTypeRange.value[e.detail.value].name;
      breedId.value = petTypeRange.value[e.detail.value].id;
    };
    let getPetBreeds = async (typeId) => {
      common_vendor.index.showLoading({
        title: ""
      });
      try {
        let result = await services_api.petBreeds(typeId);
        petTypeRange.value = result.data.data;
        console.log(result);
        common_vendor.index.hideLoading();
      } catch (err) {
        console.log(err);
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onMounted(() => {
      const currentDate = /* @__PURE__ */ new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const formattedMonth = month < 10 ? "0" + month : month.toString();
      const formattedDay = day < 10 ? "0" + day : day.toString();
      brithDayObj.value = {
        year,
        month: formattedMonth,
        day: formattedDay
      };
      brithDay.value = `${year}-${month}-${day}`;
      getPetBreeds(2);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(petName),
        b: common_vendor.o(($event) => common_vendor.isRef(petName) ? petName.value = $event.detail.value : petName = $event.detail.value),
        c: common_vendor.t(common_vendor.unref(brithDayObj).year),
        d: common_vendor.t(common_vendor.unref(brithDayObj).month),
        e: common_vendor.t(common_vendor.unref(brithDayObj).day),
        f: _ctx.date,
        g: common_vendor.unref(startDate),
        h: common_vendor.unref(endDate),
        i: common_vendor.o((...args) => common_vendor.unref(bindDateChange) && common_vendor.unref(bindDateChange)(...args)),
        j: common_vendor.o(() => {
        }),
        k: common_vendor.f(common_vendor.unref(petTypeItems), (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.n(index === common_vendor.unref(selectedPetType) ? "pet-type-item-select" : "pet-type-item-unselect"),
            c: common_vendor.t(item.title),
            d: common_vendor.n(index === common_vendor.unref(selectedPetType) ? "pet-type-item-right-select" : "pet-type-item-right-unselect"),
            e: common_vendor.o(($event) => common_vendor.unref(handlePetTypeItem)(index, item.id), index),
            f: index
          };
        }),
        l: common_vendor.t(common_vendor.unref(selectPetVariety)),
        m: common_vendor.o((...args) => common_vendor.unref(petVarietyChange) && common_vendor.unref(petVarietyChange)(...args)),
        n: _ctx.index,
        o: common_vendor.unref(petTypeRange),
        p: common_vendor.f(common_vendor.unref(petGenderItems), (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => common_vendor.unref(handlePetGenderItem)(index, item.id), index),
            d: common_vendor.s(index === 0 ? "margin-right: 40rpx;" : ""),
            e: common_vendor.n(index === common_vendor.unref(selectGenderType) ? "gender-select" : "gender-unselect"),
            f: index
          };
        }),
        q: common_vendor.o(() => {
        }),
        r: common_vendor.o((...args) => _ctx.change && _ctx.change(...args)),
        s: common_vendor.unref(currentStep),
        t: common_vendor.o(($event) => common_vendor.unref(toNextStep)()),
        v: common_vendor.unref(currentStep) === 0,
        w: common_vendor.o(($event) => common_vendor.unref(toPreStep)()),
        x: common_vendor.o(($event) => common_vendor.unref(handleSave)()),
        y: common_vendor.unref(currentStep) === 1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18317c12"]]);
wx.createPage(MiniProgramPage);
