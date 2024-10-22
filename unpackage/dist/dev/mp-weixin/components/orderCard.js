"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "orderCard",
  setup(__props) {
    let tagsItems = [{ title: "上新" }, { title: "猫猫" }, { title: "毛绒" }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(tagsItems), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b147ca8b"]]);
wx.createComponent(Component);
