const { sequelize } = require("../database/config");
const { response, request } = require("express");

const User = require("../models/user");
const User_address = require("../models/user_address");

const userGet = async (req = request, res = response) => {
  const users = await User.findAll({ include: "user_address" });
  res.json(users);
};

const userPost = async (req = request, res = response) => {
  const { user_address, ...user } = req.body;
  const address = user_address[0];
  const newUser = new User(user);
  const newAddress = new User_address(address);
  const t = await sequelize.transaction();
  try {
    let result = await newUser.save({ transaction: t });
    console.log();
    newAddress.user_id = result.dataValues.id;
    await newAddress.save({ transaction: t });
    await t.commit();
    res.json({ newUser, newAddress });
  } catch (error) {
    await t.rollback();
    throw new Error(error.message);
  }
};

const userPut = async (req = request, res = response) => {
  const { user, id } = req.body;
  const updateuser = user.update({ user }, { where: { id } });
  res.json(updateuser);
};

const userDelete = async (req = request, res = response) => {
  const { id } = req.body;
  const t = await sequelize.transaction();
  try {
    User_address.destroy({ where: { user_id: id } }, { transaction: t });
    User.destroy({ where: { id } }, { transaction: t });
    await t.commit();
    res.json({ msg: "se elimino correctamente el usuario" });
  } catch (error) {}
};

module.exports = { userGet, userPost, userPut, userDelete };
