"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "identityInfo",
  setup(__props) {
    let petTypeItems = common_vendor.ref([{ title: "我是猫猫", id: 1, icon: "" }, { title: "我是狗狗", id: 2, icon: "" }]);
    let petGenderItems = common_vendor.ref([{ title: "弟弟", id: 1, icon: "icon-xiongxing" }, { title: "妹妹", id: 2, icon: "icon-cixing" }]);
    let selectedPetType = common_vendor.ref(0);
    let currentStep = common_vendor.ref(0);
    let selectGenderType = common_vendor.ref(0);
    let toPreStep = () => {
      currentStep.value = --currentStep.value;
      console.log(currentStep.value);
    };
    let toNextStep = () => {
      currentStep.value = ++currentStep.value;
      console.log(currentStep.value);
    };
    let handlePetTypeItem = (index) => {
      selectedPetType.value = index;
    };
    let handlePetGenderItem = (index) => {
      selectGenderType.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(() => {
        }),
        b: common_vendor.f(common_vendor.unref(petTypeItems), (item, index, i0) => {
          return {
            a: common_vendor.n(index === common_vendor.unref(selectedPetType) ? "pet-type-item-select" : "pet-type-item-unselect"),
            b: common_vendor.t(item.title),
            c: common_vendor.n(index === common_vendor.unref(selectedPetType) ? "pet-type-item-right-select" : "pet-type-item-right-unselect"),
            d: common_vendor.o(($event) => common_vendor.unref(handlePetTypeItem)(index), index),
            e: index
          };
        }),
        c: common_vendor.f(common_vendor.unref(petGenderItems), (item, index, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => common_vendor.unref(handlePetGenderItem)(index), index),
            d: common_vendor.s(index === 0 ? "margin-right: 40rpx;" : ""),
            e: common_vendor.n(index === common_vendor.unref(selectGenderType) ? "gender-select" : "gender-unselect"),
            f: index
          };
        }),
        d: common_vendor.o(() => {
        }),
        e: common_vendor.o((...args) => _ctx.change && _ctx.change(...args)),
        f: common_vendor.unref(currentStep),
        g: common_vendor.o(($event) => common_vendor.unref(toNextStep)()),
        h: common_vendor.unref(currentStep) === 0,
        i: common_vendor.o(($event) => common_vendor.unref(toPreStep)()),
        j: common_vendor.unref(currentStep) === 1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18317c12"]]);
wx.createPage(MiniProgramPage);
