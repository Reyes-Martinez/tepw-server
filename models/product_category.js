const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const { User } = require("./user");
const Product_category = sequelize.define(
  "product_category",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
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

module.exports = Product_category;
