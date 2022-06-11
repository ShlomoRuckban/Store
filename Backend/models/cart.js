const Joi = require("joi");
const mongoose = require("mongoose");

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    userid: {
      type: String,
      required: true,
    },
    itemid: {
      type: Array,
    }
  })
);

function validateCart(cart) {
  const schema = Joi.object({
    userid: Joi.string().required(),
    itemid: Joi.array()
  });
  return schema.validate(cart);
}

exports.Cart = Cart;
exports.validate = validateCart;
