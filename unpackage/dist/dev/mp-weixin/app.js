"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/index.js";
  "./pages/login/index.js";
  "./pages/report/index.js";
  "./pages/personal/orders.js";
  "./pages/home/group_buying.js";
  "./pages/home/star_answer.js";
  "./pages/report/report-result.js";
  "./pages/personal/petIDCardList.js";
  "./pages/personal/identityInfo.js";
  "./pages/personal/index.js";
  "./pages/home/mbti_questiton.js";
  "./pages/home/pet_mbti.js";
  "./pages/cart/index.js";
}
const _sfc_main = {
  globalData: {
    imgBaseUrl: "http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com"
  },
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
