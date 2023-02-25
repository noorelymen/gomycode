const { User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!(email && password)) {
      return res.status(400).send("All fields are required");
    }
    //validate if user exists in db
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      //generate token
      const token = jwt.sign({ email: user.email }, process.env.TOKEN_KEY, {
        expiresIn: "2h",
      });
      user.token = token;
      res.status(200).send(user.token);
    } else {
      return res.status(401).send("Incorrect email or password.");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//REGISTER
exports.registerUser = async (req, res) => {
  try {
    //get user info from req.body
    const { firstname, lastname, username, email, password } = req.body;
    //validations
    if (!(firstname && lastname && username && email && password)) {
      return res.status(400).send("All fields are required");
    }

    //verify if it's an existing user
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User already exists.");
    }

    //encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    //generate token
    const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    //save user
    const savedUser = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: encryptedPassword,
      token,
    });

    //send response
    res.status(201).json({
      msg: "User created successfully",
      user: {
        firstname: savedUser.firstname,
        lastname: savedUser.lastname,
        username: savedUser.username,
        email: savedUser.email,
        password: savedUser.password,
        role: savedUser.role,
        token: savedUser.token,
        createAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
