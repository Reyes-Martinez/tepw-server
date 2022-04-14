const { DataTypes } = require("sequelize");
const { connectDb } = require("../database/config");

const User = db.define("User", {});

module.exports = User;
