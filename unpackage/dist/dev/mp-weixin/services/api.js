"use strict";
const services_request = require("./request.js");
const assessmentDetails = async (id) => {
  return services_request.request({
    url: "/report/assessment/" + id,
    method: "get"
  });
};
const login = async (params) => {
  return services_request.request({
    url: "/login",
    method: "post",
    data: params
  });
};
const petCards = (async) => {
  return services_request.request({
    url: "/pet/cards",
    method: "get"
  });
};
exports.assessmentDetails = assessmentDetails;
exports.login = login;
exports.petCards = petCards;
