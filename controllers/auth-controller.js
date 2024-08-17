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
      res.status(400).json({ msg: "user alrady exist" });
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      const userData = await User.create({
        username,
        email,
        phone,
        password: hashPassword,
      });
      res
        .status(201)
        .json({
          msg: userData,
          token: await register.generateToken(),
          userId: register._id.toString(),
        });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
