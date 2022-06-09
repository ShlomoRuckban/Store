const express = require("express");
const items = require("../routes/items");
const users = require("../routes/users");
const auth = require("../routes/auth");
// const error = require("../middleware/error");


module.exports = function (app) {
  app.use(express.json());
  app.use("/api/items", items);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  // app.use(error);
};
