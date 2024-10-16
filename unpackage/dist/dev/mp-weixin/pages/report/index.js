"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let currentReport = common_vendor.ref(0);
    let change = (e) => {
      console.log(e.detail.current);
    };
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
    let bindClick = (e) => {
      console.log(e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_vendor.f(3, (item, index, i0) => {
          return {
            a: index
          };
        }),
        d: common_vendor.o((...args) => common_vendor.unref(change) && common_vendor.unref(change)(...args)),
        e: common_vendor.unref(currentReport),
        f: common_vendor.f(3, (item, index, i0) => {
          return {
            a: common_vendor.f(4, (_item, _index, i1) => {
              return {
                a: _index
              };
            }),
            b: common_vendor.o(($event) => common_vendor.unref(bindClick)(), index),
            c: common_vendor.o(common_vendor.unref(change), index),
            d: "14542b8b-1-" + i0 + ",14542b8b-0",
            e: index
          };
        }),
        g: common_assets._imports_2,
        h: common_vendor.p({
          ["right-options"]: common_vendor.unref(options1)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14542b8b"]]);
wx.createPage(MiniProgramPage);
