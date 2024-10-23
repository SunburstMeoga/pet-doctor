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
const petCards = async () => {
  return services_request.request({
    url: "/pet/cards",
    method: "get"
  });
};
const storePetCard = async (data) => {
  return services_request.request({
    url: "/pet/card",
    method: "post",
    data
  });
};
const petBreeds = async (typeId) => {
  return services_request.request({
    url: "/pet/breeds/" + typeId,
    method: "get"
  });
};
const createReport = async (data) => {
  return services_request.request({
    url: "/report",
    method: "post",
    data
  });
};
const reportDetails = async (id) => {
  return services_request.request({
    url: "/report/" + id,
    method: "get"
  });
};
exports.assessmentDetails = assessmentDetails;
exports.createReport = createReport;
exports.login = login;
exports.petBreeds = petBreeds;
exports.petCards = petCards;
exports.reportDetails = reportDetails;
exports.storePetCard = storePetCard;
