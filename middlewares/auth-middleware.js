const JWT = require("jsonwebtoken");
const User = require("../models/user-model.js");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    console.log("Token does not exist ");
    return res.json({ message: "acces denied" });
  }
  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVerified = JWT.verify(jwtToken, process.env.SECRET);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.id = userData._id;
    req.token = token;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authMiddleware;
