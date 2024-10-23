"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
if (!Array) {
  const _component_order_card = common_vendor.resolveComponent("order-card");
  _component_order_card();
}
const _sfc_main = {
  __name: "group_buying",
  setup(__props) {
    let activityItems = common_vendor.ref([{ id: 1, title: "团购活动" }]);
    let productList = common_vendor.ref([]);
    let buyNow = async (item) => {
      console.log("点解购买按钮", item);
      common_vendor.index.showLoading({
        title: "创建订单..."
      });
      let res = await services_api.createOrder({ item_id: item.items[0].id, quantity: 1 });
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
    let getProductList = async () => {
      let result = await services_api.allProduct();
      console.log("商品列表", result);
      productList.value = result.data.data;
    };
    common_vendor.onMounted(() => {
      getProductList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(activityItems), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index
          };
        }),
        b: common_vendor.f(common_vendor.unref(productList), (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(buyNow)(item), index),
            b: "10e48a25-0-" + i0,
            c: common_vendor.p({
              title: item.title,
              intro: item.intro,
              tagsItems: item.tags,
              price: item.price * 0.01
            }),
            d: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10e48a25"]]);
wx.createPage(MiniProgramPage);
