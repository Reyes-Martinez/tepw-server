const { response, request } = require("express");
const { sequelize } = require("../database/config");
const User_Payment = require("../models/user_payment");
const Order_items = require("../models/order_items");
const Order_details = require("../models/order_details");

const paymentGet = async (req = request, res = response) => {};

const paymentPost = async (req = request, res = response) => {
  const { items, totalCost, user_id } = req.body;
  const order_details = new Order_details({
    user_id: user_id,
    total: totalCost,
    user_payment: 1,
  });
  const t = await sequelize.transaction();
  let order_item = null;
  try {
    const resp = await order_details.save({ transaction: t });
    for (const item of items) {
      order_item = new Order_items({
        order_id: resp.id,
        product_id: item.product_id,
        quantity: item.quantity,
      });
      await order_item.save({ transaction: t });
    }
    await t.commit();
    res.status(200).json({ msg: res.id });
  } catch (error) {
    await t.rollback();
    throw new Error(error.message);
  }
};

const add_payment_metodPost = async (req = request, res = response) => {
  const id = req.params.id;
  const user_payment = req.body;
  const newUser_payment = new User_Payment(user_payment);
  await newUser_payment.save();
  res.status(200).json({ msg: "Payment" });
};

const add_payment_metodGet = async (req = request, res = response) => {
  const id = req.params.id;
  const metods = await User_Payment.findAll({ where: { user_id: id } });
  res.status(200).json(metods);
};

module.exports = {
  paymentGet,
  paymentPost,
  add_payment_metodGet,
  add_payment_metodPost,
};
