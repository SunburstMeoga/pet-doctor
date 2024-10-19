"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "petCard",
  props: {
    showEdit: {
      type: Boolean,
      deafult: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.showEdit
      }, __props.showEdit ? {} : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-241ef60e"]]);
wx.createComponent(Component);
