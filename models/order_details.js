const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const { User } = require("./user");
const Order_details = sequelize.define(
  "order_details",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.DECIMAL,
    },
    payment_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    //* omitir campos de created_at y update_at
    timestamps: false,
    //* concervamos el mismo nombre de la tabla sin pluralizarlo
    freezeTableName: true,
  }
);

module.exports = Order_details;
