"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "productCard",
  props: {
    pictures: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    intro: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
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
        a: __props.pictures,
        b: common_vendor.t(__props.title),
        c: common_vendor.t(__props.intro),
        d: common_vendor.t(__props.price.toFixed(2)),
        e: common_vendor.o(($event) => common_vendor.unref(buyNow)())
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-44877ebc"]]);
wx.createComponent(Component);
