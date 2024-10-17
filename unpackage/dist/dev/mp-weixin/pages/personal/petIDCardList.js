"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  petCard();
}
const petCard = () => "../../components/petCard.js";
const _sfc_main = {
  __name: "petIDCardList",
  setup(__props) {
    let cardList = common_vendor.ref([]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(cardList).length !== 0,
        b: common_vendor.f(common_vendor.unref(cardList), (item, index, i0) => {
          return {
            a: "9a7bd0cc-0-" + i0,
            b: index
          };
        }),
        c: common_vendor.unref(cardList).length !== 0,
        d: common_vendor.unref(cardList).length === 0
      }, common_vendor.unref(cardList).length === 0 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9a7bd0cc"]]);
wx.createPage(MiniProgramPage);
