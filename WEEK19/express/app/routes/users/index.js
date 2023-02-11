const express = require("express");
const router = express.Router();
const { users } = require("../../data");
const { isAdmin } = require("../../middleware/isAdmin");

module.exports = () => {
  router.get("/", (req, res) => {
    res.status(200).json(users);
  });
  router.get("/:id", isAdmin, (req, res) => {
    const user = users.find((el) => el.id === parseInt(req.params.id));
    if (user) {
      res.status(200).json(user);
    } else if (user.role !== "Admin") {
      res.status(404).send("You're not an admin");
    } else {
      res.status(404).send("Users not found");
    }
  });
  return router;
};
