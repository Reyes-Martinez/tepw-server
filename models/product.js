const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");

const Product = sequelize.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    inventory: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    proveedor: {
      type: DataTypes.INTEGER,
    },
    discount_id: {
      type: DataTypes.INTEGER,
    },
    // created_at: {
    // type: DataTypes.STRING,
    // },
    // modified_at: {
    // type: DataTypes.STRING,
    // },
    // deleted_at: {
    // type: DataTypes.STRING,
    // },
  },
  {
    //* omitir campos de created_at y update_at
    timestamps: false,
    //* concervamos el mismo nombre de la tabla sin pluralizarlo
    freezeTableName: true,
  }
);

module.exports = Product;
