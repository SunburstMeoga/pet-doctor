"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "GroupBuyCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    intro: {
      type: String,
      default: ""
    },
    tagsItems: {
      type: Array,
      default: () => []
    },
    price: {
      type: Number,
      default: 0
    },
    detail_pictures: {
      type: String,
      default: ""
    }
  },
  emits: ["handleBuyNow"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    let buyNow = () => {
      emit("handleBuyNow");
    };
    return (_ctx, _cache) => {
      return {
        a: __props.detail_pictures,
        b: common_vendor.t(__props.title),
        c: common_vendor.t(__props.intro),
        d: common_vendor.f(__props.tagsItems, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        e: common_vendor.t(__props.price.toFixed(2)),
        f: common_vendor.o(($event) => common_vendor.unref(buyNow)())
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a89c6ed2"]]);
wx.createComponent(Component);
