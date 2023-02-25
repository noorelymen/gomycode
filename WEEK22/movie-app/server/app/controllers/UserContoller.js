const { User } = require("../models/User");

//GET ALL Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { name: 0 });
    res.status(200).json({
      msg: "Successful Get All Users",
      users,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//GET A USER
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//CREATE A NEW User
exports.addNewUser = async (req, res) => {
  try {
    const { firstname, lastname, username, email, password, token } = req.body;
    //backend validations
    if (!(firstname && lastname && username && email && password && token)) {
      return res.status(409).send("All fields are required");
    }
    const newUser = { firstname, lastname, username, email, password, token };
    const user = new User(newUser);
    const savedUser = await user.save();
    return res.status(200).json({
      msg: "User created",
      created: savedUser,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//UPDATE A USER
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, username, email, password, token } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("User Not found.");
    }
    const updatedUser = {
      firstname,
      lastname,
      username,
      email,
      password,
      token,
    };
    const update = await User.findOneAndUpdate({ _id: id }, updatedUser, {
      new: true,
      useFindAndModify: false,
    });
    return res.status(200).json({
      msg: "User updated",
      update: update,
    });
  } catch (err) {
    //next(err);
    res.status(500).send(err.message);
  }
};

//DELETE A User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id });
    res.status(200).json({
      msg: "User deleted.",
      id,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
