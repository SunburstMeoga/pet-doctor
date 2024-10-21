"use strict";
const services_request = require("./request.js");
const assessmentDetails = async (id) => {
  return services_request.request({
    url: "/report/assessment/${id}",
    method: "get"
  });
};
exports.assessmentDetails = assessmentDetails;
