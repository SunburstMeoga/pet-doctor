"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "pet_mbti",
  setup(__props) {
    let researchItems = common_vendor.ref([{ id: 1, title: "基本信息" }, { id: 2, title: "营养目标" }, { id: 3, title: "生活习惯" }, { id: 4, title: "身体状况" }]);
    common_vendor.onMounted(() => {
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(researchItems), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-be0b9130"]]);
wx.createPage(MiniProgramPage);
