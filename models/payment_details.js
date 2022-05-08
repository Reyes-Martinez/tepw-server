const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const Payment_details = sequelize.define(
  "payment_details",
  {
    order_id: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    provider: {
      type: DataTypes.STRING,
    },
    status: {
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

module.exports = Payment_details;
