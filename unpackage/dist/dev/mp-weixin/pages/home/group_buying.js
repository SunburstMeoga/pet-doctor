"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  OrderCard();
}
const OrderCard = () => "../../components/orderCard.js";
const _sfc_main = {
  __name: "group_buying",
  setup(__props) {
    let activityItems = common_vendor.ref([{ id: 1, title: "团购活动" }, { id: 2, title: "线下活动" }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(activityItems), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index
          };
        }),
        b: common_vendor.f(3, (item, index, i0) => {
          return {
            a: "10e48a25-0-" + i0,
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10e48a25"]]);
wx.createPage(MiniProgramPage);
