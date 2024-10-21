"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../services/request.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.onMounted(() => {
    });
    let getUserProfileWrapper = () => {
      return new Promise((resolve, reject) => {
        common_vendor.index.getUserProfile({
          desc: "用于完善会员资料",
          success: (res) => resolve(res.userInfo),
          fail: (err) => reject(err)
        });
      });
    };
    let toLogin = async () => {
      const result1 = await getUserProfileWrapper();
      const result2 = await getUserProfileWrapper();
      console.log(result1, result2);
      return;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(toLogin)())
      };
    };
  }
};
wx.createPage(_sfc_main);
