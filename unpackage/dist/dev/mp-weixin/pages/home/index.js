"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let title = common_vendor.ref("hello");
    let cardsCount = common_vendor.ref(0);
    let toAssessment = (assessmentId) => {
      if (cardsCount.value <= 0) {
        common_vendor.index.navigateTo({
          url: `/pages/personal/identityInfo?assessmentId=${assessmentId}`
        });
      } else {
        common_vendor.index.navigateTo({
          url: `/pages/home/star_answer?assessmentId=${assessmentId}`
        });
      }
    };
    let handleHotActive = () => {
      common_vendor.index.navigateTo({
        url: "/pages/home/group_buying"
      });
    };
    common_vendor.onMounted(async () => {
      console.log(title.value);
      let petCardsList = await services_api.petCards();
      console.log(petCardsList.data.data.length, petCardsList);
      cardsCount.value = petCardsList.data.data.length;
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(($event) => common_vendor.unref(toAssessment)("1")),
        c: common_vendor.o(($event) => common_vendor.unref(toAssessment)("2")),
        d: common_vendor.o(($event) => common_vendor.unref(toAssessment)("3")),
        e: `http://pet-miniapp-test.oss-cn-shenzhen.aliyuncs.com/media/20241024/9OgTxmojJkcnprZnfPdAlYeT8jn4dPhPcBmZfJPm.png`,
        f: common_vendor.o((...args) => common_vendor.unref(handleHotActive) && common_vendor.unref(handleHotActive)(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"]]);
wx.createPage(MiniProgramPage);
