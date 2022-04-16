const { DataTypes } = require("sequelize");
const { connectDb } = require("../database/config");

const Product = connectDb.define("Product", {
  name: {
    type: DataTypes.STRING,
  },
  decription: {
    type: DataTypes.STRING,
  },
  SKU: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.INTEGER,
  },
  inventory: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.STRING,
  },
  discount: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Product;
