import express from "express";
import {
  createBeforeAfterImage,
  getBeforeAfterImages,
  getBeforeAfterImageById,
  deleteBeforeAfterImage,
} from "../controllers/beforeAfterImage.controller.js";

const router = express.Router();

// Create new before-after image entry
router.post("/", createBeforeAfterImage);

// Get all entries
router.get("/", getBeforeAfterImages);

// Get single entry by ID
router.get("/:id", getBeforeAfterImageById);

// Delete entry by ID
router.delete("/:id", deleteBeforeAfterImage);

export default router;
