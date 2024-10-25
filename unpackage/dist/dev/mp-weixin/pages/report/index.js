"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const services_api = require("../../services/api.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (petCard + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const petCard = () => "../../components/petCard.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let currentReport = common_vendor.ref(0);
    let cardList = common_vendor.ref([]);
    let options1 = common_vendor.ref([{
      text: "删除",
      style: {
        backgroundColor: "#F15912",
        color: "#fff",
        width: "62rpx",
        borderRadius: "16rpx",
        fontSize: "24rpx",
        writingMode: "tb-rl",
        minHeight: "228rpx"
      }
    }]);
    let reportList = common_vendor.ref([]);
    let bindClick = (e) => {
      console.log(e);
    };
    let swipeChange = async (e) => {
      console.log(e);
      console.log(currentReport.value);
      let resReport = await services_api.reports({ pet_card_id: cardList.value[currentReport.value].id });
      console.log("切换轮播图之后的宠物id", cardList.value[currentReport.value].id);
      console.log("切换轮播图之后的报告", resReport);
    };
    let toAddCard = () => {
      common_vendor.index.navigateTo({
        url: "/pages/personal/identityInfo"
      });
    };
    common_vendor.onMounted(async () => {
      common_vendor.index.showLoading({
        title: "正在加载..."
      });
      let petCardsList = await services_api.petCards();
      if (petCardsList.data.data[0].id) {
        let resReport = await services_api.reports({ pet_card_id: petCardsList.data.data[0].id });
        reportList.value = resReport.data.data;
        console.log("报告", resReport);
        common_vendor.index.hideLoading();
      }
      common_vendor.index.hideLoading();
      cardList.value = petCardsList.data.data;
      console.log("宠物id", petCardsList.data.data[0].id);
      console.log(petCardsList.data.data.length, petCardsList);
      console.log(cardList.value);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_vendor.unref(cardList).length !== 0
      }, common_vendor.unref(cardList).length !== 0 ? {
        c: common_vendor.f(common_vendor.unref(cardList), (item, index, i0) => {
          return {
            a: "14542b8b-0-" + i0,
            b: common_vendor.p({
              name: item.name,
              breed: item.breed.name,
              sex: item.sex,
              time: item.birth_at
            }),
            c: index
          };
        }),
        d: common_vendor.o((...args) => common_vendor.unref(swipeChange) && common_vendor.unref(swipeChange)(...args)),
        e: common_vendor.unref(currentReport)
      } : {}, {
        f: common_vendor.unref(cardList).length === 0
      }, common_vendor.unref(cardList).length === 0 ? {
        g: common_vendor.o(($event) => common_vendor.unref(toAddCard)())
      } : {}, {
        h: common_vendor.unref(cardList).length !== 0 && common_vendor.unref(reportList).length !== 0
      }, common_vendor.unref(cardList).length !== 0 && common_vendor.unref(reportList).length !== 0 ? {
        i: common_vendor.f(common_vendor.unref(reportList), (item, index, i0) => {
          return {
            a: common_vendor.f(4, (_item, _index, i1) => {
              return {
                a: _index
              };
            }),
            b: common_vendor.o(($event) => common_vendor.unref(bindClick)(), index),
            c: common_vendor.o(_ctx.change, index),
            d: "14542b8b-2-" + i0 + ",14542b8b-1",
            e: index
          };
        }),
        j: common_assets._imports_1,
        k: common_vendor.p({
          ["right-options"]: common_vendor.unref(options1)
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14542b8b"]]);
wx.createPage(MiniProgramPage);
