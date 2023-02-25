const express = require("express");
require("dotenv").config();
require("./config/db").connect();
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); //3rd party middleware
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello world!"));
app.use("/api", apiRoutes());

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
