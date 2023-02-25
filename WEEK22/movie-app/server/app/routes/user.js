const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

module.exports = () => {
  //GET ALL USERS
  router.get("/", UserController.getAllUsers);

  //GET USER BY ID
  router.get("/:id", UserController.getUserById);

  //ADD NEW USER
  router.post("/", UserController.addNewUser);

  //UPDATE USER
  router.put("/:id", UserController.updateUser);

  //DELETE USER
  router.delete("/:id", UserController.deleteUser);

  return router;
};
