const express = require("express");
const products = require("./products");
const users = require("./users");
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.status(200).send("Add either /products or /users to the url");
  });
  router.use("/products", products()); //this is the parent router
  router.use("/users", users()); //this is the parent router
  return router;
};
