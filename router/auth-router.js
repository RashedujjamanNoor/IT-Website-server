const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validator/auth-validator");

router.get("/", home);
router.post("/register", validate(signupSchema), register);
router.post("/login", login);

module.exports = router;
