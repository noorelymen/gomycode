const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config(); //bcs we need the token key

const checkLogin = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    //verifications

    //1. decode the token using the key
    const decoded = jwt.decode(token, process.end.TOKEN_KEY);
    if (!decoded) {
      return res.status(403).send("Invalid Token.");
    }
    //another layer of security
    const result = await User.findOne({ email: decoded.email });
    if (!result) {
      return res.status(401).json({ access: "Not allowed." });
    } else {
      return next();
    }
  } else {
    return res.status(401).send("No token provided.");
  }
};

module.exports = checkLogin;
