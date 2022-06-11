const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");
const { Cart } = require("../models/cart");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//login
router.post("/me", async (req, res) => {
  req.body.email = req.body.email.toLowerCase();
  const user = await User.findOne({ email: req.body.email });
  const token = user.generateAuthToken();
  const resUser = {
    "id": user._id,
    // "name" : user.name,
    // "email" : user.email,
    // "password" : user.password,
    "token" : token
  }
  // res.header("x-auth-token", token).send(resUser);
  res.send(resUser);
});

//register
router.post("/", async (req, res) => {
  req.body.email = req.body.email.toLowerCase();
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  var cart = new Cart({
    userid: user._id,
    itemid: [""],
  });

  cart = await cart.save();

  // const token = user.generateAuthToken();
  res.send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
