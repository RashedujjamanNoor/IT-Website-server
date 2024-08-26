const express = require("express");
const {
  getAllUsers,
  getAllContacts,
  deleteUser,
  singleUser,
  updateUser,
  deleteContact,
  createServices,
  getAllServices,
  deleteService,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
router.get("/contacts", authMiddleware, adminMiddleware, getAllContacts);
router.delete("/contacts/:id", authMiddleware, adminMiddleware, deleteContact);
router.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);
router.get("/users/:id", authMiddleware, adminMiddleware, singleUser);
router.put("/users/:id", authMiddleware, adminMiddleware, updateUser);
router.post("/services", authMiddleware, adminMiddleware, createServices);
router.get("/services", authMiddleware, adminMiddleware, getAllServices);
router.delete("/services/:id", authMiddleware, adminMiddleware, deleteService);

module.exports = router;
