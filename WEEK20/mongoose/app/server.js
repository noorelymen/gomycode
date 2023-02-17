const express = require("express");
require("dotenv").config();
require("./config/db").connect();
const { Exemple } = require("./models/exemple");
//const a = require("./config/db")
//a.connect()
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

//const PORT = process.env.PORT;

app.post("/exemple", async (req, res) => {
  const { title, description } = req.body;
  if(!title || !description) {
    return res.send("All fields are required")
  }

  const exemple = new Exemple ({
    tit
  })
});

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
