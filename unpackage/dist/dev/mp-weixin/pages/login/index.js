"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let testCode = common_vendor.ref("");
    common_vendor.ref("");
    let getPhone = common_vendor.ref(false);
    common_vendor.ref("");
    common_vendor.onMounted(() => {
    });
    let onGetPhoneNumber = async (e) => {
      common_vendor.index.showLoading({
        title: "正在登录...",
        mask: true
        // 是否显示透明蒙层，防止触摸穿透  
      });
      if (e.detail.errMsg == "getPhoneNumber:fail user deny") {
        common_vendor.index.hideLoading();
      } else {
        console.log(e);
        console.log(e.detail.encryptedData);
        let getNumber = await services_api.userPhone({ code: e.detail.code });
        console.log("手机号", getNumber);
        common_vendor.index.hideLoading();
        common_vendor.index.switchTab({
          url: "/pages/home/index"
        });
      }
    };
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
                getPhone.value = true;
                common_vendor.index.hideLoading();
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
        a: !common_vendor.unref(getPhone),
        b: common_vendor.o(($event) => common_vendor.unref(toLogin)()),
        c: common_vendor.unref(getPhone),
        d: common_vendor.o((...args) => common_vendor.unref(onGetPhoneNumber) && common_vendor.unref(onGetPhoneNumber)(...args))
      };
    };
  }
};
wx.createPage(_sfc_main);
