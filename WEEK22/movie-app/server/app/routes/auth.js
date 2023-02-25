const express = require("express");
const checkLogin = require("../middleware/checkLogin");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

module.exports = () => {
  //LOGIN
  router.post("/login", AuthController.loginUser);

  //REGISTER
  router.post("/register", AuthController.registerUser);
  //private route
  router.get("/verifytoken", checkLogin, (req, res) => {
    res.status(200).send("Authorized");
  });

  return router;
};
