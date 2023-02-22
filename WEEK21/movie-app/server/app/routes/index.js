const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const movieRoutes = require("./movie");

module.exports = () => {
  router.use("/auth", authRoutes());
  router.use("/movies", movieRoutes());
  return router;
};
