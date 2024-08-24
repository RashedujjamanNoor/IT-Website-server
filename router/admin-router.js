const express = require("express");
const {
  getAllUsers,
  getAllContacts,
  deleteUser,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
router.get("/contacts", authMiddleware, adminMiddleware, getAllContacts);
router.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
