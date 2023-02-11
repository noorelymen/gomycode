const express = require("express");
const router = express.Router();
const { products } = require("../../data");

module.exports = () => {
  router.get("/", (req, res) => {
    res.status(200).json(products);
  });
  router.get("/:id", (req, res) => {
    const product = products.find((el) => el.id === parseInt(req.params.id));
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send("Product not found");
    }
  });
  return router;
};
