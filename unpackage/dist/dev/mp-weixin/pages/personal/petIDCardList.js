"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  petCard();
}
const petCard = () => "../../components/petCard.js";
const _sfc_main = {
  __name: "petIDCardList",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(4, (item, index, i0) => {
          return {
            a: "9a7bd0cc-0-" + i0,
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a7bd0cc"]]);
wx.createPage(MiniProgramPage);
