const Joi = require("joi");
const mongoose = require("mongoose");

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    itemid: {
      type: Array,
    }
  })
);

function validateCart(cart) {
  const schema = Joi.object({
    itemid: Joi.array()
  });
  return schema.validate(cart);
}

exports.Cart = Cart;
exports.validate = validateCart;
