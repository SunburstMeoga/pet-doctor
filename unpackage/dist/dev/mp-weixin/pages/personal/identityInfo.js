"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "identityInfo",
  setup(__props) {
    let currentStep = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.change && _ctx.change(...args)),
        b: common_vendor.unref(currentStep)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18317c12"]]);
wx.createPage(MiniProgramPage);
