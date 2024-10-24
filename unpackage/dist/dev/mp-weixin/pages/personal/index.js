"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
      console.log("token", common_vendor.index.getStorageSync("token"));
      getUserInfo();
      if (common_vendor.index.getStorageSync("token")) {
        isLogged.value = true;
        console.log(isLogged.value);
      } else {
        isLogged.value = false;
      }
    });
    let isLogged = common_vendor.ref(false);
    let userInfoObj = common_vendor.ref({});
    let toPolicy = () => {
      common_vendor.index.navigateTo({
        url: "/pages/home/privacy_policy"
      });
    };
    let getUserInfo = async () => {
      let res = await services_api.userInfo();
      let { avatar, nickname } = res.data.data;
      userInfoObj.value = { avatar, nickname };
      console.log("个人资料", res);
    };
    let handleOrder = (status) => {
      if (!common_vendor.index.getStorageSync("token")) {
        common_vendor.index.showToast({
          title: "请先登录",
          icon: "none"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/personal/orders?status=${status}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.unref(userInfoObj).avatar,
        c: common_vendor.t(common_vendor.unref(userInfoObj).nickname),
        d: common_vendor.o(($event) => common_vendor.unref(handleOrder)("0")),
        e: common_vendor.o(($event) => common_vendor.unref(handleOrder)("1")),
        f: common_vendor.o(($event) => common_vendor.unref(handleOrder)("2")),
        g: common_vendor.o(($event) => common_vendor.unref(handleOrder)(null)),
        h: common_vendor.o(($event) => common_vendor.unref(toPolicy)())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3327436b"]]);
wx.createPage(MiniProgramPage);
