"use strict";
const common_vendor = require("../../common/vendor.js");
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
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(cardList).length !== 0,
        b: common_vendor.f(3, (item, index, i0) => {
          return {
            a: "9a7bd0cc-2-" + i0 + "," + ("9a7bd0cc-1-" + i0),
            b: common_vendor.o(($event) => _ctx.bindClick(), index),
            c: common_vendor.o(_ctx.change, index),
            d: "9a7bd0cc-1-" + i0 + ",9a7bd0cc-0",
            e: index
          };
        }),
        c: common_vendor.p({
          ["right-options"]: common_vendor.unref(options1)
        }),
        d: common_vendor.unref(cardList).length !== 0,
        e: common_vendor.unref(cardList).length === 0
      }, common_vendor.unref(cardList).length === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a7bd0cc"]]);
wx.createPage(MiniProgramPage);
