"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "orderCard",
  props: {
    orderNumber: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    status: {
      type: Number,
      default: 0
    },
    product_picture: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.orderNumber),
        b: common_vendor.t(__props.status === 3 ? "交易成功" : "交易失败"),
        c: __props.product_picture,
        d: common_vendor.t(__props.price.toFixed(2)),
        e: common_vendor.t(__props.count)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b147ca8b"]]);
wx.createComponent(Component);
