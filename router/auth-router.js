const express = require("express");
const router = express.Router();
const {
  home,
  register,
  login,
  user,
} = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validator/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/", home);
router.post("/register", validate(signupSchema), register);
router.post("/login", login);
router.get("/user", authMiddleware, user);

module.exports = router;
