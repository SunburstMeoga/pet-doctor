"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "star_answer",
  setup(__props) {
    let isAgree = common_vendor.ref(false);
    let handleAgree = () => {
      isAgree.value = !isAgree.value;
      console.log(isAgree.value);
    };
    let handleStarAnswer = () => {
      if (!isAgree.value) {
        common_vendor.index.showToast({
          title: "需同意并勾选喵博士 X 汪博士协议",
          icon: "none",
          duration: 3e3
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/home/mbti_questiton"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(handleAgree)()),
        b: common_vendor.n(common_vendor.unref(isAgree) ? "protocol-left-select" : "protocol-left-unselect"),
        c: common_vendor.o(($event) => common_vendor.unref(handleStarAnswer)())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a5e4f95"]]);
wx.createPage(MiniProgramPage);