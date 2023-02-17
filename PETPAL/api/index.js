import express from "express";
import dotenv from "dotenv"; //read the MONGO environment variable from the .env file which contains the MongoDB connection string
import mongoose from "mongoose"; //establish a connection with the MongoDB database, and it's connected when the server is started using the app.listen() method at the end of this file
//const express = require("express");

import authRoute from "./routes/auth.js";
import petsRoute from "./routes/pets.js";
import usersRoute from "./routes/users.js";
import petAdoptRoute from "./routes/petadopted.js";

const app = express();
dotenv.config();

//initital connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

//listen in case there is a DB connection error at sometime
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

//MIDLLEWARES
app.use(express.json());
app.use("/api/auth", authRoute); //if /auth is visited then use authRoute
app.use("/api/users", usersRoute);
app.use("/api/pets", petsRoute);
app.use("/api/petadopted", petAdoptRoute);

//after executing the route middleware the next() function will send back here and executes whats inside
app.use((err, req, res, next) => {
  //send a response to the user
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  mongoose.set("strictQuery", false);
  connect(); //connectiong the db with the backend server
  console.log("Connected to backend.");
});
