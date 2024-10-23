"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "report-result",
  setup(__props) {
    let reportId = common_vendor.ref("");
    let dimensionsItems = common_vendor.ref([]);
    let reportTitle = common_vendor.ref("");
    let getReportDeatils = async (reportId2) => {
      let result = await services_api.reportDetails(reportId2);
      console.log("报告详情", result);
      dimensionsItems.value = result.data.data.dimensions;
      reportTitle.value = result.data.data.assessment.title;
    };
    common_vendor.onMounted(() => {
      getReportDeatils(reportId.value);
    });
    common_vendor.onLoad((options) => {
      console.log(options);
      reportId.value = options.reportId;
      console.log(reportId.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(reportTitle)),
        b: common_vendor.f(common_vendor.unref(dimensionsItems), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.value),
            c: common_vendor.n(item.score < 0 ? `color-text-${index}` : `color-gray`),
            d: common_vendor.n(`color-${index}`),
            e: item.score + "%;",
            f: common_vendor.n(item.score < 0 ? "justify-start" : "justify-end"),
            g: common_vendor.t(item.reverse_value),
            h: common_vendor.n(item.score > 0 ? `color-text-${index}` : `color-gray`),
            i: index
          };
        }),
        c: common_vendor.f(common_vendor.unref(dimensionsItems), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.value),
            c: common_vendor.n(`color-text-${index}`),
            d: common_vendor.t(item.result_text),
            e: common_vendor.t(item.suggest_text),
            f: index
          };
        }),
        d: common_assets._imports_0$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fdd21b61"]]);
wx.createPage(MiniProgramPage);
