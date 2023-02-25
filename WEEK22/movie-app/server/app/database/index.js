const mongoose = require("mongoose");

const { Movie } = require("../models/Movie");
const { User } = require("../models/User");

const MoviesData = require("./data/movies.json");
const UsersData = require("./data/users.json");

require("dotenv").config();

const { MONGO_DEV_URL } = process.env;
console.log("MONGO_DEV_URL", MONGO_DEV_URL);

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_DEV_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (x) => {
    console.log(`Connected to Mongo Database name: ${x.connections[0].name}`);
    await Movie.insertMany(MoviesData);
    await User.insertMany(UsersData);
    console.log("Database Seed Terminated");
    mongoose.connection.close(function () {
      console.log("Disconncted From Db ***");
      process.exit(0);
    });
  })
  .catch((err) => {
    console.log(`Error connecting to mongo: ${err.msg}`);
  });
