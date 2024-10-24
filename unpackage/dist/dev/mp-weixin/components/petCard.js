"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "petCard",
  props: {
    showEdit: {
      type: Boolean,
      deafult: false
    },
    name: {
      type: String,
      default: "博士"
    },
    breed: {
      type: String,
      default: ""
    },
    sex: {
      type: Number,
      default: 1
    },
    time: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.showEdit
      }, __props.showEdit ? {} : {}, {
        b: common_vendor.t(__props.name),
        c: common_vendor.t(__props.breed),
        d: common_vendor.t(__props.sex === 1 ? "弟弟" : "妹妹"),
        e: __props.sex === 1 ? "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/xw5zyhJxcGairwn3f8dP0u84dSynNFNEMpotB1YP.png" : "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/km2tstUhBbT5PgGv5kMcxrTTWQZOo49Yhz2fqTgs.png",
        f: common_vendor.t(__props.time)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-241ef60e"]]);
wx.createComponent(Component);
