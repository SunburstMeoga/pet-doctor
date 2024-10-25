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
const allProduct = async () => {
  return services_request.request({
    url: "/products",
    method: "get"
  });
};
const createOrder = async (data) => {
  return services_request.request({
    url: "/order",
    method: "post",
    data
  });
};
const pay = async (data) => {
  return services_request.request({
    url: "/pay",
    method: "post",
    data
  });
};
const orders = async (data) => {
  return services_request.request({
    url: "/orders",
    method: "get",
    data
  });
};
const reports = async (data) => {
  return services_request.request({
    url: "/reports",
    method: "get",
    data
  });
};
const userPhone = async (data) => {
  return services_request.request({
    url: "/user/phone",
    method: "post",
    data
  });
};
const deletePet = async (cardId) => {
  return services_request.request({
    url: "/pet/card/" + cardId,
    method: "delete"
  });
};
const userInfo = async () => {
  return services_request.request({
    url: "/user/info",
    method: "get"
  });
};
const petInfo = async (petId) => {
  return services_request.request({
    url: "/pet/card/" + petId,
    method: "get"
  });
};
exports.allProduct = allProduct;
exports.assessmentDetails = assessmentDetails;
exports.createOrder = createOrder;
exports.createReport = createReport;
exports.deletePet = deletePet;
exports.login = login;
exports.orders = orders;
exports.pay = pay;
exports.petBreeds = petBreeds;
exports.petCards = petCards;
exports.petInfo = petInfo;
exports.reportDetails = reportDetails;
exports.reports = reports;
exports.storePetCard = storePetCard;
exports.userInfo = userInfo;
exports.userPhone = userPhone;
