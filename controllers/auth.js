const bcryptjs = require("bcryptjs");
const { response, request } = require("express");
const { generatedJWT } = require("../helpers/generate-jwt");
const User = require("../models/user");

const login = async (req = request, res = response) => {
  const { email, password } = req.body;
  console.log(email, password);
  //verificar email exisre
  const usuario = await User.findOne({ email, include: "user_rol" });
  const [user_rol] = usuario.user_rol;
  const { role_id } = user_rol;
  if (!usuario) {
    return res.status(400).json({
      msg: "error email",
    });
  }
  //verificar contraseña
  const validPassword = bcryptjs.compareSync(password, usuario.password);
  if (!validPassword) {
    return res.status(400).json({
      msg: "error password ",
    });
  }
  //Generar el JWT
  const token = await generatedJWT(usuario.id, role_id);
  res.json({
    msg: "login",
    user: usuario,
    token,
  });
};

module.exports = { login };
