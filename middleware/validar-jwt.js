const jwt = require("jsonwebtoken");
const { request, response } = require("express");
const validateJWT = (req = request, res = response, next) => {
  const token = req.header("jwt_token");
  if (!token) {
    return res.status(401).json({ msg: "token not found" });
  }
  try {
    const { uid, roleid } = jwt.verify(token, process.env.SECRET);
    req.uid = uid;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "jwt not valid" });
  }
};

module.exports = { validateJWT };
