const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const User_payment = sequelize.define(
  "user_payment",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    payment_type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    account_no: {
      type: DataTypes.STRING,
    },
    month: {
      type: DataTypes.STRING,
    },
    ccv: {
      type: DataTypes.STRING,
    },
    year: {
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

module.exports = User_payment;
