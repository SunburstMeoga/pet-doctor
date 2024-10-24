"use strict";
const common_vendor = require("../common/vendor.js");
const request = common_vendor.axios.create({
  // baseURL:'http://120.76.219.115/api',
  baseURL: "https://pet-api.lemonbk.cn/api",
  timeout: 6e4,
  adapter: common_vendor.UniAdapter
  // 指定适配器1
});
request.interceptors.request.use(async (config) => {
  console.log(common_vendor.index.getStorageSync("token"));
  config.headers["Authorization"] = common_vendor.index.getStorageSync("token");
  return config;
});
request.interceptors.response.use((response) => {
  if (response.status === 200 || response.status === 204) {
    if ((response == null ? void 0 : response.statusCode) === 200 || (response == null ? void 0 : response.statusCode) === 204) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  } else {
    if (response.status === 401) {
      console.log("未登录");
      common_vendor.index.showModal({
        title: "未登录",
        content: "您尚未登录，请前往登录",
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
            common_vendor.index.switchTab({
              url: "/pages/personal/index"
            });
          }
        }
      });
    } else if (response.status === 422)
      ;
    return Promise.reject(response);
  }
});
exports.request = request;
