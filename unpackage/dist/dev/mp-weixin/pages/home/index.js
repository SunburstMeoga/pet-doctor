"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let title = common_vendor.ref("hello");
    let toAssessment = () => {
      common_vendor.index.navigateTo({
        url: "/pages/home/mbti_questiton"
      });
    };
    common_vendor.onMounted(() => {
      console.log(title.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o((...args) => common_vendor.unref(toAssessment) && common_vendor.unref(toAssessment)(...args)),
        c: common_vendor.o((...args) => common_vendor.unref(toAssessment) && common_vendor.unref(toAssessment)(...args)),
        d: common_vendor.o((...args) => common_vendor.unref(toAssessment) && common_vendor.unref(toAssessment)(...args)),
        e: common_assets._imports_1,
        f: common_assets._imports_2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"]]);
wx.createPage(MiniProgramPage);
