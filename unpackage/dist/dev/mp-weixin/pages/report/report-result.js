"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
if (!Math) {
  (petCard + productCard)();
}
const petCard = () => "../../components/petCard.js";
const productCard = () => "../../components/productCard.js";
const _sfc_main = {
  __name: "report-result",
  setup(__props) {
    let reportId = common_vendor.ref("");
    let dimensionsItems = common_vendor.ref([]);
    let reportTitle = common_vendor.ref("");
    let cardId = common_vendor.ref("");
    let mbtiImg = common_vendor.ref("");
    let handleShare = () => {
      console.log("点击了分享");
      common_vendor.index.share({
        provider: "weixin",
        scene: "WXSceneTimeline",
        type: 1,
        // href: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/7Tz2CqszkkrCwJVQzvWSRay4vaqRoIbMoJzyw1Aq.png",
        title: "喵博士 X 汪博士",
        summary: "我正在使用喵博士 X 汪博士进行爱宠MBTI测试，赶紧跟我一起来体验！",
        imageUrl: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/7Tz2CqszkkrCwJVQzvWSRay4vaqRoIbMoJzyw1Aq.png",
        success: function(res) {
          console.log("success:" + JSON.stringify(res));
        },
        fail: function(err) {
          console.log("fail:" + JSON.stringify(err));
        }
      });
    };
    let getReportDeatils = async (reportId2) => {
      common_vendor.index.showLoading({
        title: "正在加载..."
      });
      let result = await services_api.reportDetails(reportId2);
      common_vendor.index.hideLoading();
      console.log("报告详情", result);
      dimensionsItems.value = result.data.data.dimensions;
      reportTitle.value = result.data.data.assessment.title;
      mbtiImg.value = result.data.data.image;
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
      cardId.value = options.cardId;
      console.log(reportId.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(mbtiImg),
        b: common_vendor.t(common_vendor.unref(reportTitle)),
        c: common_vendor.f(common_vendor.unref(dimensionsItems), (item, index, i0) => {
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
        d: common_vendor.f(common_vendor.unref(dimensionsItems), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.value),
            c: common_vendor.n(`color-text-${index}`),
            d: common_vendor.t(item.text),
            e: common_vendor.t(item.suggest),
            f: index
          };
        }),
        e: common_vendor.f(common_vendor.unref(productList), (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(buyNow)(item), index),
            b: "fdd21b61-1-" + i0,
            c: common_vendor.p({
              title: item.title,
              intro: item.intro,
              pictures: item.pictures[0],
              price: item.price * 0.01
            }),
            d: index
          };
        }),
        f: common_vendor.o(($event) => common_vendor.unref(handleShare)())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fdd21b61"]]);
wx.createPage(MiniProgramPage);
