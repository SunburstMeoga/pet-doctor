"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let currentReport = common_vendor.ref(0);
    let change = (e) => {
      console.log(e.detail.current);
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
        e: common_vendor.unref(currentReport)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14542b8b"]]);
wx.createPage(MiniProgramPage);
