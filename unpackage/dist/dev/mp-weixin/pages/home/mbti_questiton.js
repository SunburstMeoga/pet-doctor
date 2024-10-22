"use strict";
const common_vendor = require("../../common/vendor.js");
const services_api = require("../../services/api.js");
const _sfc_main = {
  __name: "mbti_questiton",
  setup(__props) {
    common_vendor.ref([]);
    let questionItems = common_vendor.ref([]);
    let selectedOption = common_vendor.ref(null);
    let currentQuestion = common_vendor.ref(0);
    common_vendor.ref([]);
    let change = (e) => {
      currentQuestion.value = e.detail.current;
      console.log(currentQuestion.value);
    };
    let toPreQuestion = () => {
      currentQuestion.value = --currentQuestion.value;
      console.log(currentQuestion.value);
    };
    let handleOptions = (_item, item, index) => {
      questionItems.value.map((select) => {
        select.selectid = _item.id;
      });
      console.log(_item.id, item.id);
      console.log(questionItems.value);
      console.log(currentQuestion.value, questionItems.value.length);
      if (currentQuestion.value < questionItems.value.length) {
        currentQuestion.value = ++currentQuestion.value;
      }
    };
    let getAssessmentDetails = async (assessmentType) => {
      try {
        const result = await services_api.assessmentDetails(assessmentType);
        questionItems.value = result.data.data.questions;
        questionItems.value.map((item) => {
          item.selectid = null;
          item.answers.map((_item) => {
            _item.isSelect = false;
          });
        });
        console.log(questionItems.value);
      } catch (err) {
        console.log(err);
      }
    };
    common_vendor.onMounted(() => {
      getAssessmentDetails(1);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(questionItems), (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.title),
            c: common_vendor.f(item.answers, (_item, _index, i1) => {
              return {
                a: common_vendor.t(_item.text),
                b: common_vendor.o(($event) => common_vendor.unref(handleOptions)(_item, item, index), _index),
                c: common_vendor.n(_item.id === item.selectid ? "content-question-options-item-active" : "content-question-options-item-unactive"),
                d: _index
              };
            }),
            d: index,
            e: common_vendor.o(() => {
            }, index)
          };
        }),
        b: common_vendor.t(common_vendor.unref(questionItems).length <= 9 ? "0" + common_vendor.unref(questionItems).length : common_vendor.unref(questionItems).length),
        c: common_vendor.o((...args) => common_vendor.unref(change) && common_vendor.unref(change)(...args)),
        d: common_vendor.unref(currentQuestion),
        e: !common_vendor.unref(selectedOption) && common_vendor.unref(currentQuestion) === 0
      }, !common_vendor.unref(selectedOption) && common_vendor.unref(currentQuestion) === 0 ? {} : {}, {
        f: common_vendor.unref(currentQuestion) !== 0 && common_vendor.unref(currentQuestion) !== common_vendor.unref(questionItems).length - 1
      }, common_vendor.unref(currentQuestion) !== 0 && common_vendor.unref(currentQuestion) !== common_vendor.unref(questionItems).length - 1 ? {
        g: common_vendor.o(($event) => common_vendor.unref(toPreQuestion)())
      } : {}, {
        h: common_vendor.unref(currentQuestion) === common_vendor.unref(questionItems).length - 1
      }, common_vendor.unref(currentQuestion) === common_vendor.unref(questionItems).length - 1 ? {
        i: common_vendor.o(($event) => common_vendor.unref(toPreQuestion)())
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-708312cf"]]);
wx.createPage(MiniProgramPage);
