"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const services_api = require("../../services/api.js");
if (!Math) {
  productCard();
}
const productCard = () => "../../components/productCard.js";
const _sfc_main = {
  __name: "report-result",
  setup(__props) {
    let reportId = common_vendor.ref("");
    let dimensionsItems = common_vendor.ref([]);
    let reportTitle = common_vendor.ref("");
    let getReportDeatils = async (reportId2) => {
      common_vendor.index.showLoading({
        title: "正在加载..."
      });
      let result = await services_api.reportDetails(reportId2);
      common_vendor.index.hideLoading();
      console.log("报告详情", result);
      dimensionsItems.value = result.data.data.dimensions;
      reportTitle.value = result.data.data.assessment.title;
      productList.value = result.data.data.products;
      console.log(productList.value[0].pictures[0]);
    };
    let productList = common_vendor.ref([]);
    let buyNow = async (item) => {
      console.log("点解购买按钮", item);
      common_vendor.index.showLoading({
        title: "创建订单..."
      });
      let res = await services_api.createOrder({ item_id: item.id, quantity: 1 });
      let payResult = await services_api.pay({ order_sn: res.data.data.order_sn });
      common_vendor.index.requestPayment({
        "timeStamp": payResult.data.data.timeStamp,
        "nonceStr": payResult.data.data.nonceStr,
        "package": payResult.data.data.package,
        "signType": payResult.data.data.signType,
        "paySign": payResult.data.data.paySign,
        "success": function(res2) {
          console.log("success", res2);
          common_vendor.index.hideLoading();
        },
        "fail": function(res2) {
          console.log("fail", res2);
          common_vendor.index.hideLoading();
        },
        "complete": function(res2) {
          console.log("complete", res2);
          common_vendor.index.hideLoading();
        }
      });
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
            d: common_vendor.t(item.text),
            e: common_vendor.t(item.suggest),
            f: index
          };
        }),
        d: common_vendor.f(common_vendor.unref(productList), (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(buyNow)(item), index),
            b: "fdd21b61-0-" + i0,
            c: common_vendor.p({
              title: item.title,
              intro: item.intro,
              pictures: item.pictures[0],
              price: item.price * 0.01
            }),
            d: index
          };
        }),
        e: common_assets._imports_0$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fdd21b61"]]);
wx.createPage(MiniProgramPage);
