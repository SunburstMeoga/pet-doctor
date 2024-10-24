"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
      console.log("token", common_vendor.index.getStorageSync("token"));
      if (common_vendor.index.getStorageSync("token")) {
        isLogged.value = true;
        console.log(isLogged.value);
      } else {
        isLogged.value = false;
      }
    });
    let isLogged = common_vendor.ref(false);
    let toPolicy = () => {
      common_vendor.index.navigateTo({
        url: "/pages/home/privacy_policy"
      });
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
                isLogged.value = true;
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
      return common_vendor.e({
        a: common_assets._imports_0,
        b: !common_vendor.unref(isLogged)
      }, !common_vendor.unref(isLogged) ? {
        c: common_vendor.o(($event) => common_vendor.unref(toLogin)())
      } : {}, {
        d: common_vendor.o(($event) => common_vendor.unref(handleOrder)("0")),
        e: common_vendor.o(($event) => common_vendor.unref(handleOrder)("1")),
        f: common_vendor.o(($event) => common_vendor.unref(handleOrder)("2")),
        g: common_vendor.o(($event) => common_vendor.unref(handleOrder)(null)),
        h: common_vendor.o(($event) => common_vendor.unref(toPolicy)())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3327436b"]]);
wx.createPage(MiniProgramPage);
