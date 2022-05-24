const { response, request } = require("express");
const User_Payment = require("../models/user_payment");
const Order_items = require("../models/order_items");
const Order_details = require("../models/order_details");

const paymentGet = async (req = request, res = response) => {};

const paymentPost = async (req = request, res = response) => {};

const add_payment_metodPost = async (req = request, res = response) => {};
module.exports = {
  paymentGet,
  paymentPost,
  add_payment_metodPost,
};
