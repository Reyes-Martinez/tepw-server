const { DataTypes } = require("sequelize");
const { connectDb } = require("../database/config");

const User = connectDb.define("User", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  telephone: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
