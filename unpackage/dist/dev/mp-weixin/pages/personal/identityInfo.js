"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "identityInfo",
  setup(__props) {
    let petTypeItems = common_vendor.ref([{
      title: "我是猫猫",
      id: 1,
      icon: ""
    }, {
      title: "我是狗狗",
      id: 2,
      icon: ""
    }]);
    let petGenderItems = common_vendor.ref([{
      title: "弟弟",
      id: 1,
      icon: "icon-xiongxing"
    }, {
      title: "妹妹",
      id: 2,
      icon: "icon-cixing"
    }]);
    let brithDayObj = common_vendor.ref({
      year: "",
      month: "",
      day: ""
    });
    let selectedPetType = common_vendor.ref(0);
    let currentStep = common_vendor.ref(0);
    let selectGenderType = common_vendor.ref(0);
    common_vendor.ref(0);
    let selectPetVariety = common_vendor.ref("请选择");
    let petTypeRange = common_vendor.ref([{ name: "西高地" }, { name: "边牧" }, { name: "金毛" }, { name: "阿拉斯加" }]);
    let toPreStep = () => {
      currentStep.value = --currentStep.value;
      console.log(currentStep.value);
    };
    let toNextStep = () => {
      currentStep.value = ++currentStep.value;
      console.log(currentStep.value);
    };
    let handlePetTypeItem = (index) => {
      selectedPetType.value = index;
    };
    let handlePetGenderItem = (index) => {
      selectGenderType.value = index;
    };
    let bindDateChange = (e) => {
      console.log(e);
      console.log(e.detail.value);
      const [year, month, day] = e.detail.value.split("-");
      brithDayObj.value = {
        year,
        month,
        day
      };
    };
    let getDate = (type) => {
      const date = /* @__PURE__ */ new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    };
    let startDate = common_vendor.computed(() => {
      return getDate("start");
    });
    let endDate = common_vendor.computed(() => {
      return getDate("end");
    });
    let petVarietyChange = (e) => {
      console.log("e:", e);
      selectPetVariety.value = petTypeRange.value[e.detail.value].name;
    };
    common_vendor.onMounted(() => {
      const currentDate = /* @__PURE__ */ new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const formattedMonth = month < 10 ? "0" + month : month.toString();
      const formattedDay = day < 10 ? "0" + day : day.toString();
      brithDayObj.value = {
        year,
        month: formattedMonth,
        day: formattedDay
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(brithDayObj).year),
        b: common_vendor.t(common_vendor.unref(brithDayObj).month),
        c: common_vendor.t(common_vendor.unref(brithDayObj).day),
        d: _ctx.date,
        e: common_vendor.unref(startDate),
        f: common_vendor.unref(endDate),
        g: common_vendor.o((...args) => common_vendor.unref(bindDateChange) && common_vendor.unref(bindDateChange)(...args)),
        h: common_vendor.o(() => {
        }),
        i: common_vendor.f(common_vendor.unref(petTypeItems), (item, index, i0) => {
          return {
            a: common_vendor.n(index === common_vendor.unref(selectedPetType) ? "pet-type-item-select" : "pet-type-item-unselect"),
            b: common_vendor.t(item.title),
            c: common_vendor.n(index === common_vendor.unref(selectedPetType) ? "pet-type-item-right-select" : "pet-type-item-right-unselect"),
            d: common_vendor.o(($event) => common_vendor.unref(handlePetTypeItem)(index), index),
            e: index
          };
        }),
        j: common_vendor.t(common_vendor.unref(selectPetVariety)),
        k: common_vendor.o((...args) => common_vendor.unref(petVarietyChange) && common_vendor.unref(petVarietyChange)(...args)),
        l: _ctx.index,
        m: common_vendor.unref(petTypeRange),
        n: common_vendor.f(common_vendor.unref(petGenderItems), (item, index, i0) => {
          return {
            a: common_vendor.n(item.icon),
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => common_vendor.unref(handlePetGenderItem)(index), index),
            d: common_vendor.s(index === 0 ? "margin-right: 40rpx;" : ""),
            e: common_vendor.n(index === common_vendor.unref(selectGenderType) ? "gender-select" : "gender-unselect"),
            f: index
          };
        }),
        o: common_vendor.o(() => {
        }),
        p: common_vendor.o((...args) => _ctx.change && _ctx.change(...args)),
        q: common_vendor.unref(currentStep),
        r: common_vendor.o(($event) => common_vendor.unref(toNextStep)()),
        s: common_vendor.unref(currentStep) === 0,
        t: common_vendor.o(($event) => common_vendor.unref(toPreStep)()),
        v: common_vendor.unref(currentStep) === 1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18317c12"]]);
wx.createPage(MiniProgramPage);
