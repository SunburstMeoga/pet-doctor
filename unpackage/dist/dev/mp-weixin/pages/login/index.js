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
      common_vendor.index.showLoading({
        title: "正在登录...",
        mask: true
        // 是否显示透明蒙层，防止触摸穿透  
      });
      let code, encryptedData, iv;
      common_vendor.index.getUserProfile({
        desc: "用于完善会员资料",
        // 声明获取用户个人信息后的用途，后续会展示在弹窗中  
        success: (res) => {
          console.log(res);
          if (res.platform === "devtools") {
            common_vendor.index.setEnableDebug({
              enableDebug: true
            });
          }
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
                console.log(encryptedData, iv, code);
                const result = await services_api.login({
                  code,
                  iv,
                  encrypted_data: encryptedData
                });
                console.log(result);
                common_vendor.index.setStorageSync(
                  "token",
                  `Bearer ${result.data.data.api_token}`
                );
                console.log(result.data.data.api_token);
                console.log(common_vendor.index.getStorageSync("token"));
                const petCardsList = await services_api.petCards();
                console.log(petCardsList.data, petCardsList);
                common_vendor.index.hideLoading();
                if (petCardsList.data.length === 0) {
                  common_vendor.index.navigateTo({
                    url: "/pages/home/star_answer"
                  });
                } else {
                  common_vendor.index.navigateTo({
                    url: "/pages/personal/identityInfo"
                  });
                }
              } catch (err) {
                console.log(err);
                common_vendor.index.hideLoading();
              }
            },
            fail: (error) => {
              console.error("登录失败", error);
              common_vendor.index.hideLoading();
            }
          });
        },
        fail: (err) => {
          console.error("获取用户信息失败", err);
          common_vendor.index.hideLoading();
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
