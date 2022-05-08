const { response, request } = require("express");
const User_address = require("../models/user_address");

const addressGet = async (req = request, res = response) => {
  const user_id = req.params.user_id;
  const address = await User_address.findAll({ where: { user_id: user_id } });
  res.json(address);
};

const addressPost = async (req, res) => {
  const user_id = req.params.user_id;
  const { user_address } = req.body;
  const newAddress = new User_address(user_address);
  newAddress.user_id = user_id;
  await newAddress.save();
  res.json({ msg: "Created is success" });
};

const addressPut = async (req = request, res = response) => {
  const id = req.params.id;
  const { address } = req.body;
  User_address.update(address, { where: { id } });
  res.json({ msg: "Updated is success" });
};

module.exports = { addressGet, addressPut, addressPost };
