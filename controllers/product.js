const { response, request } = require("express");
const { QueryTypes, Op } = require("sequelize");

const { sequelize } = require("../database/config");
const Product = require("../models/product");

const productGet = async (req = request, res = response) => {
  const products = await Product.findAll();
  res.json(products);
};
const productGetByName = async (req = request, res = response) => {
  const name = req.params.name;
  const product = await Product.findAll({
    where: {
      name: {
        [Op.like]: "%" + name + "%",
      },
    },
  });

  res.json(product);
};

const productPost = async (req = request, res = response) => {
  const product = req.body;
  const newProduct = new Product(product);
  await newProduct.save();
  res.status(200).json(newProduct);
};

const productPut = async (req = request, res = response) => {
  const id = req.params.id;
  const product = req.body;
  await Product.update(product, { where: { id } });
  console.log(product, id);
  res.status(200).json(product);
};

const productDelete = async (req = request, res = response) => {
  const id = req.params.id;
  const deleteProduct = await Product.destroy({ where: { id } });

  res.status(200).json(deleteProduct);
};

module.exports = {
  productGet,
  productDelete,
  productPost,
  productPut,
  productGetByName,
};
