const { response, request } = require("express");
const Cart_item = require("../models/cart_item");
const Product = require("../models/product");

const cart_itemGet = async (req = request, res = response) => {
  const { id } = req.params;
  const cart_items = await Cart_item.findAll({ where: { user_id: id } });
  const cartItems = new Array();
  let product;
  let totalCost = 0;
  for (const item of cart_items) {
    product = await Product.findOne({ where: { id: item.product_id } });
    totalCost += parseFloat(product.price) * parseFloat(item.quantity);
    cartItems.push({
      id: item.id,
      user_id: item.user_id,
      product_id: item.product_id,
      quantity: item.quantity,
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        categoryId: product.categoryId,
        inventory: product.inventory,
        price: product.price,
        proveedor: product.proveedor,
      },
    });
  }
  console.log(totalCost);
  res.status(200).json({ cartItems, totalCost });
};

const cart_itemPost = async (req = request, res = response) => {
  const cart_item = req.body;
  const newCart_item = new Cart_item(cart_item);
  await newCart_item.save();
  res.json(newCart_item);
};
const cart_itemDelete = async (req = request, res = response) => {
  const { id } = req.params;
  console.log(id);
  await Cart_item.destroy({ where: { id } });
  res.status(200).json({ msj: "destroy item" });
};

module.exports = { cart_itemGet, cart_itemPost, cart_itemDelete };
