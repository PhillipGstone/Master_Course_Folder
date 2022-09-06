const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../users/userModel");
require("dotenv").config();

exports.hashPassword = async (req, res, next) => {
  // next is used in middleware to pass it to the next one or controller.
  try {
    if ("password" in req.body) {
      const hashedPassword = await bcrypt.hash(req.body.password, 8); // 8 salt rounds, how many times it gets hashed.
      req.body.password = hashedPassword;
      next(); // last thing middleware does to pass to next middleware.
    } else {
      throw new Error("No password provided");  // Error class so capital. 
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.tokenCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "some secret");
    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      throw new Error("User does not exist");
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(400).send({ error: "Please log in" });
  }
};