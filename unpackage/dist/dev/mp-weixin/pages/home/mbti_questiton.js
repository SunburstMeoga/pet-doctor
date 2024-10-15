"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "mbti_questiton",
  setup(__props) {
    let optionsItems = common_vendor.ref([{
      id: 1,
      title: "参与谈话",
      content: "是的，我也觉得铲屎官今天穿搭有点浮夸"
    }, {
      id: 2,
      title: "避而不谈",
      content: "对不起，我是汪，请不要cue我"
    }]);
    let questionItems = common_vendor.ref([{}, {}, {}, {}, {}, {}, {}]);
    let selectedOption = common_vendor.ref(null);
    let currentQuestion = common_vendor.ref(0);
    let handleOptions = ({ id }) => {
      selectedOption.value = id;
      currentQuestion.value = ++currentQuestion.value;
      setTimeout(() => {
        selectedOption.value = null;
      }, 100);
      console.log(id, selectedOption.value);
    };
    let change = (e) => {
      currentQuestion.value = e.detail.current;
      console.log(currentQuestion.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(questionItems), (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.f(common_vendor.unref(optionsItems), (item2, index2, i1) => {
              return {
                a: common_vendor.t(item2.title),
                b: common_vendor.t(item2.content),
                c: common_vendor.o(($event) => common_vendor.unref(handleOptions)(item2), item2.id),
                d: common_vendor.n(item2.id === common_vendor.unref(selectedOption) ? "content-question-options-item-active" : "content-question-options-item-unactive"),
                e: item2.id
              };
            }),
            c: index,
            d: common_vendor.o(() => {
            }, index)
          };
        }),
        b: common_vendor.t(common_vendor.unref(questionItems).length <= 9 ? "0" + common_vendor.unref(questionItems).length : common_vendor.unref(questionItems).length),
        c: common_vendor.o((...args) => common_vendor.unref(change) && common_vendor.unref(change)(...args)),
        d: common_vendor.unref(currentQuestion),
        e: !common_vendor.unref(selectedOption) && common_vendor.unref(currentQuestion) === 0
      }, !common_vendor.unref(selectedOption) && common_vendor.unref(currentQuestion) === 0 ? {} : {}, {
        f: common_vendor.unref(currentQuestion) !== 0 && common_vendor.unref(currentQuestion) !== common_vendor.unref(questionItems).length - 1
      }, common_vendor.unref(currentQuestion) !== 0 && common_vendor.unref(currentQuestion) !== common_vendor.unref(questionItems).length - 1 ? {} : {}, {
        g: common_vendor.unref(currentQuestion) === common_vendor.unref(questionItems).length - 1
      }, common_vendor.unref(currentQuestion) === common_vendor.unref(questionItems).length - 1 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-708312cf"]]);
wx.createPage(MiniProgramPage);
