const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const Discount = sequelize.define(
  "discount",
  {
    name: {
      type: DataTypes.STRING,
    },
    discount_percent: {
      type: DataTypes.DECIMAL,
    },
    active: {
      type: DataTypes.TINYINT,
    },
  },
  {
    //* omitir campos de created_at y update_at
    timestamps: false,
    //* concervamos el mismo nombre de la tabla sin pluralizarlo
    freezeTableName: true,
  }
);

module.exports = Discount;
