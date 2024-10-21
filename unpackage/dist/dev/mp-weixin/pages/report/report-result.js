"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  (petCard + productCard)();
}
const petCard = () => "../../components/petCard.js";
const productCard = () => "../../components/productCard.js";
const _sfc_main = {
  __name: "report-result",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(4, (_item, _index, i0) => {
          return {
            a: _index
          };
        }),
        b: common_vendor.f(5, (item, index, i0) => {
          return {
            a: "fdd21b61-1-" + i0,
            b: index
          };
        }),
        c: common_assets._imports_0$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fdd21b61"]]);
wx.createPage(MiniProgramPage);
