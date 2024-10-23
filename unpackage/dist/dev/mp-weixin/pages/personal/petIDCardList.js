"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (petCard + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const petCard = () => "../../components/petCard.js";
const _sfc_main = {
  __name: "petIDCardList",
  setup(__props) {
    let cardList = common_vendor.ref([""]);
    let options1 = common_vendor.ref([{
      text: "删除",
      style: {
        backgroundColor: "#F15912",
        color: "#fff",
        width: "62rpx",
        borderRadius: "16rpx",
        fontSize: "24rpx",
        writingMode: "tb-rl",
        minHeight: "228rpx"
      }
    }]);
    let assessmentId = common_vendor.ref("");
    common_vendor.onLoad((options) => {
      console.log(options);
      if (options.assessmentId) {
        assessmentId.value = options.assessmentId;
        console.log(assessmentId.value);
      }
    });
    let handleCard = (item) => {
      common_vendor.index.navigateTo({
        url: `/pages/home/mbti_questiton?cardId=${item.id}&assessmentId=${assessmentId.value}`
      });
    };
    common_vendor.onMounted(async () => {
      let petCardsList = await services_api.petCards();
      console.log(petCardsList.data.data.length, petCardsList);
      cardList.value = petCardsList.data.data;
      console.log(cardList.value);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(cardList).length !== 0,
        b: common_vendor.unref(cardList).length !== 0
      }, common_vendor.unref(cardList).length !== 0 ? {
        c: common_vendor.f(common_vendor.unref(cardList), (item, index, i0) => {
          return {
            a: "9a7bd0cc-2-" + i0 + "," + ("9a7bd0cc-1-" + i0),
            b: common_vendor.p({
              name: item.name,
              breed: item.breed.name,
              sex: item.sex,
              time: item.birth_at
            }),
            c: common_vendor.o(($event) => _ctx.bindClick(), index),
            d: common_vendor.o(_ctx.change, index),
            e: "9a7bd0cc-1-" + i0 + ",9a7bd0cc-0",
            f: index,
            g: common_vendor.o(($event) => common_vendor.unref(handleCard)(item), index)
          };
        }),
        d: common_vendor.p({
          ["right-options"]: common_vendor.unref(options1)
        })
      } : {}, {
        e: common_vendor.unref(cardList).length === 0
      }, common_vendor.unref(cardList).length === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a7bd0cc"]]);
wx.createPage(MiniProgramPage);
