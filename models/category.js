const { DataTypes } = require("sequelize");
const { connectDb } = require("../database/config");

const Role = connectDb.define("", {
  role: {
    type: DataTypes.STRING,
  },
});

module.exports = Role;
