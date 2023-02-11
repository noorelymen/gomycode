const express = require("express");
//to create an instance of our server we need to create an express function

const bodyParser = require("body-parser");

//const { products } = require("./data");
const { checkLogin } = require("./middleware/auth");
const apiRoutes = require("./routes/");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//all requests execute this middleware
app.use((req, res, next) => {
  console.log("this is an app.use");
  next();
});

//all requests that are prefixed with /api executes this middleware
app.use("/api", apiRoutes());

//define the routes
//get takes 2 parameters the path and the controller ()
//the controller has 2 parameters req and res
app.get("/", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.status(200).send("<h1>Home page</h1>"); //equivalent to res.write in http module
});

//we add as many app.get as we have routes
app.get("/about", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.status(200).send("<h1>About page</h1>"); //equivalent to res.write in http module
});

app.get("/contact", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.status(200).send("<h1>Contact page</h1>"); //equivalent to res.write in http module
});

// const checkLogin = (req, res, next) => {
//   const { authorization } = req["headers"];
//   if (!authorization || authorization !== "secret") {
//     res.status(401).send("unauthorized");
//   } else {
//     next();
//   }
// };

app.get("/private", checkLogin, (req, res) => {
  res.status(200).send("This a private route");
});

//products management
//the middleware won't be executed until the checklogin is performed
// app.get(
//   "/products",
//   checkLogin,
//   (req, res, next) => {
//     const { authorization } = req["headers"];
//     if (!authorization) {
//       res.status(401).send("authorized");
//     } else {
//       next();
//     }
//   },
//   (req, res) => {
//     res.status(200).json(products);
//   }
// );

// app.get("/products/:id", (req, res) => {
//   console.log(req.params);
//   res.status(200).send(`Products number ${req.params.id}`);
//   const product = product.find((el) => el.id === parseInt(req.params.id));
//   if (product) {
//     res.status(200).json(product);
//   } else {
//     res.status(404).send("Product not found");
//   }
// });

app.post("/addproduct", (req, res) => {
  console.log(req.body);
  res.status(200).send("<h1>Product received</h1>");
});

//listen takes 1st parameter essentail port, send is not necessary is a callback
app.listen(port, () => console.log(`App started on port ${port}`));
