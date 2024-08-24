const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("this is a response from server");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const existEmail = await User.findOne({ email: email });

    if (existEmail) {
      res.status(400).json({ message: "user alrady exist" });
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      const userData = await User.create({
        username,
        email,
        phone,
        password: hashPassword,
      });
      res.status(201).json({
        msg: userData,
        token: await userData.generateToken(),
        userId: userData._id.toString(),
      });
    }
  } catch (error) {
    console.log(error);
    // next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });

    if (!existUser) {
      res.status(400).json({ message: "Invalid Credential" });
    } else {
      const user = await bcrypt.compare(password, existUser.password);

      if (user) {
        res.status(201).json({
          msg: "Login Successful",
          token: await existUser.generateToken(),
          userId: existUser._id.toString(),
        });
      } else {
        res.status(401).json({ message: "Invalid Credential" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;

    return res.status(200).json(userData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login, user };
