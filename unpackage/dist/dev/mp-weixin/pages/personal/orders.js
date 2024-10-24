"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
if (!Math) {
  OrderCard();
}
const OrderCard = () => "../../components/orderCard.js";
const _sfc_main = {
  __name: "orders",
  setup(__props) {
    let ordersLis = common_vendor.ref([]);
    let orderStatus = common_vendor.ref("");
    let getOrders = async (orderStatus2) => {
      console.log("查询的订单状态", orderStatus2);
      let res = await services_api.orders({ status: orderStatus2 });
      console.log("订单列表", res);
      ordersLis.value = res.data.data;
    };
    common_vendor.onMounted(() => {
      getOrders(orderStatus.value);
    });
    common_vendor.onLoad((options) => {
      if (options.status) {
        orderStatus.value = options.status;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(ordersLis).length !== 0
      }, common_vendor.unref(ordersLis).length !== 0 ? {
        b: common_vendor.f(common_vendor.unref(ordersLis), (item, index, i0) => {
          return {
            a: "1e4ee681-0-" + i0,
            b: common_vendor.p({
              orderNumber: item.order_sn,
              price: item.amount * 0.01,
              status: item.status,
              count: item.items[0].quantity
            }),
            c: index
          };
        })
      } : {}, {
        c: common_vendor.unref(ordersLis).length === 0
      }, common_vendor.unref(ordersLis).length === 0 ? {} : {});
    };
  }
};
wx.createPage(_sfc_main);
