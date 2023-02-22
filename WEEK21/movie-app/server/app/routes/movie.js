const express = require("express");
const router = express.Router();

const MovieController = require("../controllers/MovieController");

module.exports = () => {
  //GET ALL MOVIES
  router.get("/", MovieController.getAllMovies);

  //GET MOVIE BY ID
  router.get("/:id", MovieController.getMovieById);

  //ADD NEW MOVIE
  router.post("/", MovieController.addNewMovie);

  //UPDATE MOVIE
  router.put("/:id", MovieController.updateMovie);

  //DELETE
  router.delete("/:id", MovieController.deleteMovie);

  return router;
};
