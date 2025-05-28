import express from "express";

import { loginAdmin, registerAdmin } from "../controllers/admin.controller.js";

const router = express.Router();

// Admin Registration (Run once to create an admin)
router.post("/register", registerAdmin);

// Admin Login
router.post("/login", loginAdmin);

export default router;
