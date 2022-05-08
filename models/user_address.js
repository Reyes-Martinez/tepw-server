const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const User_address = sequelize.define(
  "user_address",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    //* omitir campos de created_at y update_at
    timestamps: false,
    //* concervamos el mismo nombre de la tabla sin pluralizarlo
    freezeTableName: true,
  }
);

module.exports = User_address;
