import express from "express";
import { loginAdmin, registerAdmin, changePassword } from "../controllers/admin.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Admin Registration (Run once to create an admin)
router.post("/register", registerAdmin);

// Admin Login
router.post("/login", loginAdmin);

// Change Password (Protected Route)
router.post("/change-password", verifyToken, changePassword);

export default router;
