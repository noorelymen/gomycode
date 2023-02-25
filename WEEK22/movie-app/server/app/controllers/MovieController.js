const { Movie } = require("../models/Movie");

//GET ALL MOVIES
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}, { title: 0 });
    res.status(200).json({
      msg: "Successful Get All",
      movies,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//GET A MOVIE
exports.getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//CREATE A NEW MOVIE
exports.addNewMovie = async (req, res) => {
  try {
    const { title, description, rating, category, poster, trailer } = req.body;
    //backend validations
    if (!(title && description && rating && category && poster && trailer)) {
      return res.status(409).send("All fields are required");
    }
    const newMovie = { title, description, rating, category, poster, trailer };
    const movie = new Movie(newMovie);
    const savedMovie = await movie.save();
    return res.status(200).json({
      msg: "Movie created",
      created: savedMovie,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//UPDATE A MOVIE
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, rating, category, poster, trailer } = req.body;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).send("Not found.");
    }
    const updatedMovie = {
      title,
      description,
      rating,
      category,
      poster,
      trailer,
    };
    const update = await Movie.findOneAndUpdate({ _id: id }, updatedMovie, {
      new: true,
      useFindAndModify: false,
    });
    return res.status(200).json({
      msg: "Movie updated",
      update: update,
    });
  } catch (err) {
    //next(err);
    res.status(500).send(err.message);
  }
};

//DELETE A MOVIE
exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.deleteOne({ _id: id });
    res.status(200).json({
      msg: "Movie deleted.",
      id,
    });
  } catch (err) {
    //next(err);
    res.status(500).send(err.message);
  }
};

// module.exports = {
//   addNewMovie,
//   updateMovie,
//   deleteMovie,
//   getMovieById,
//   getAllMovies,
// };
