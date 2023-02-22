const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

module.exports = () => {
  //LOGIN
  router.post("/login", AuthController.loginUser);

  //REGISTER
  router.post("/register", AuthController.registerUser);

  return router;
};
