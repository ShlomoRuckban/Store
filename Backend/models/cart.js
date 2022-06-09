const Joi = require("joi");
const mongoose = require("mongoose");

const Cart = mongoose.model(
  "Cart",
  new mongoose.Schema({
    // name: {
    //   type: String,
    //   required: true,
    //   minlength: 5,
    // },
    // description: {
    //   type: String,
    //   required: true,
    // },
    price: {
      type: Number,
      required: true,
      minlength: 1,
    },
    quantity: {
      type: Number,
      required: true,
    },
    catalog: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    }
  })
);

function validateCart(cart) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    catalog: Joi.number().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
  });
  return schema.validate(cart);
}

exports.Cart = Cart;
exports.validate = validateCart;
