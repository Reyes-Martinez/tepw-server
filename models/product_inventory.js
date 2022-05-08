const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const Product_inventory = sequelize.define(
  "product_inventory",
  {
    product_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
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

module.exports = Product_inventory;
