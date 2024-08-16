const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/auth-controller");

router.get("/", home);
router.post("/register", register);

module.exports = router;
