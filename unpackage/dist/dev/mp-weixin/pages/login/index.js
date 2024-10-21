"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let testCode = common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.onMounted(() => {
    });
    let toLogin = async () => {
      let code, encryptedData, iv;
      common_vendor.index.getUserProfile({
        desc: "用于完善会员资料",
        // 声明获取用户个人信息后的用途，后续会展示在弹窗中  
        success: (res) => {
          console.log("获取用户信息成功", res);
          encryptedData = res.encryptedData;
          iv = res.iv;
          console.log(encryptedData, iv);
          common_vendor.index.login({
            provider: "weixin",
            success: async (loginRes) => {
              console.log("登录成功", loginRes);
              testCode.value = loginRes.code;
              console.log(loginRes.code);
              code = loginRes.code;
              try {
                const result = await services_api.login({ code, iv, encryptedData });
                console.log(result);
              } catch (err) {
                console.log(err);
              }
            },
            fail: (error) => {
              console.error("登录失败", error);
            }
          });
        },
        fail: (err) => {
          console.error("获取用户信息失败", err);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(toLogin)())
      };
    };
  }
};
wx.createPage(_sfc_main);
