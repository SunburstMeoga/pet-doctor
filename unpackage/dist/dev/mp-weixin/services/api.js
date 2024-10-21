"use strict";
const services_request = require("./request.js");
const assessmentDetails = async (id) => {
  return services_request.request({
    url: "/report/assessment/${id}",
    method: "get"
  });
};
const login = async (data) => {
  return services_request.request({
    url: "/login",
    method: "post",
    data
  });
};
exports.assessmentDetails = assessmentDetails;
exports.login = login;
