const { sequelize } = require("../database/config");
const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const sendEmail = require("../email/mailer");

const User = require("../models/user");
const User_rol = require("../models/user_rol");

const userGet = async (req = request, res = response) => {
  const users = await User.findAll({ include: "user_address" });
  res.json(users);
};

const userGetById = async (req = request, res = response) => {
  const id = req.params.id;
  const users = await User.findAll({ where: { id } });
  res.json(users);
};

const userPost = async (req = request, res = response) => {
  const { id_role, user } = req.body;
  user.password = encryptPassword(user.password);
  const newUser = new User(user);
  const newUser_rol = new User_rol();
  const t = await sequelize.transaction();
  try {
    const result = await newUser.save({ transaction: t });
    newUser_rol.role_id = id_role;
    newUser_rol.user_id = result.id;
    console.log(newUser_rol.role_id);
    await newUser_rol.save({ transaction: t });
    if (newUser_rol.role_id == "3") {
      const newUser_rol2 = new User_rol();
      newUser_rol2.user_id = result.id;
      newUser_rol2.role_id = 2;
      await newUser_rol2.save({ transaction: t });
    }
    await sendEmail(newUser.email, "you are registered in tepw", "register");
    await t.commit();
    res.json({ msg: "Registered is success" });
  } catch (error) {
    await t.rollback();
    throw new Error(error.message);
  }
};

const userPut = async (req = request, res = response) => {
  const id = req.params.id;
  const { user } = req.body;
  const t = await sequelize.transaction();
  if (user.password) {
    user.password = encryptPassword(user.password);
  }
  await User.update(user, { where: { id } });
  res.json({ msg: "Updated is success" });
};

//! considerar si es necesario
// const userDelete = async (req = request, res = response) => {
//   const { id } = req.body;
//   const t = await sequelize.transaction();
//   try {
//     User_address.destroy({ where: { user_id: id } }, { transaction: t });
//     User.destroy({ where: { id } }, { transaction: t });
//     await t.commit();
//     res.json({ msg: "se elimino correctamente el usuario" });
//   } catch (error) {}
// };

function encryptPassword(password) {
  const salt = bcryptjs.genSaltSync();
  const encryptedPassword = bcryptjs.hashSync(password, salt);
  return encryptedPassword;
}

const p = (req = request, res = response) => {
  const reqc = req.body;
  console.log(reqc);
};
module.exports = { userGet, userPost, userPut, userGetById, p };
