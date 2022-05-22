const { response, request } = require("express");

const Category = require("../models/product_category");

const categoryGet = async (req = request, res = response) => {
  const category = await Category.findAll();
  console.log(category);
  res.json(category);
};
module.exports = { categoryGet };
