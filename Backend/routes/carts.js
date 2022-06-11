const { Cart, validate } = require("../models/cart");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const carts = await Cart.find();
  res.send(carts);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let cart = await Cart.findOne({ userid: req.body.userid });
  if (cart) return res.status(400).send("User already has a cart.");

  cart = new Cart({
    userid: req.body.userid,
    itemid: req.body.itemid,
  });
  cart = await cart.save();

  res.send(cart);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const cart = await Cart.findByIdAndUpdate(
    req.params.id,
    {
      userid: req.body.userid,
      itemid: req.body.itemid,
    },
    { new: true }
  );

  if (!cart)
    return res.status(404).send("The cart with the given ID was not found.");

  res.send(cart);
});

router.delete("/:id", async (req, res) => {
  const cart = await Cart.findByIdAndRemove(req.params.id);

  if (!cart)
    return res.status(404).send("The cart with the given ID was not found.");

  res.send("Cart was successfully removed");
});

router.get("/:id", async (req, res) => {
  const cart = await Cart.findById(req.params.id);

  if (!cart)
    return res.status(404).send("The cart with the given ID was not found.");

  res.send(cart);
});

module.exports = router;
