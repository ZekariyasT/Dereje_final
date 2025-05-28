import BeforeAfterImage from "../models/beforeAfterImage.model.js";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { uploadMultiple, uploadDir } from "../middlewares/upload.js"; // corrected import

// Upload middleware for before and after images
export const uploadBeforeAfterImages = uploadMultiple([
  { name: "beforeImage", maxCount: 1 },
  { name: "afterImage", maxCount: 1 },
]);

// Create new before-after image
export const createBeforeAfterImage = (req, res) => {
  uploadBeforeAfterImages(req, res, async (err) => {
    if (err) {
      console.error("Upload error:", err.message);
      return res.status(400).json({ success: false, message: err.message });
    }

    // Validate files presence
    if (!req.files?.beforeImage || !req.files?.afterImage) {
      return res.status(400).json({
        success: false,
        message: "Both before and after images are required",
      });
    }

    try {
      const newEntry = new BeforeAfterImage({
        beforeImage: {
          data: req.files.beforeImage[0].filename,
          contentType: req.files.beforeImage[0].mimetype,
        },
        afterImage: {
          data: req.files.afterImage[0].filename,
          contentType: req.files.afterImage[0].mimetype,
        },
      });

      await newEntry.save();

      res.status(201).json({ success: true, data: newEntry });
    } catch (error) {
      console.error("Create Error:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Failed to create entry" });
    }
  });
};

// Get all before-after images
export const getBeforeAfterImages = async (req, res) => {
  try {
    const images = await BeforeAfterImage.find({});
    res.status(200).json({ success: true, data: images });
  } catch (error) {
    console.error("Fetch Error:", error.message);
    res.status(500).json({ success: false, message: "Failed to fetch images" });
  }
};

// Get single before-after image by ID
export const getBeforeAfterImageById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ success: false, message: "Invalid ID" });

  try {
    const image = await BeforeAfterImage.findById(id);
    if (!image)
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });

    res.status(200).json({ success: true, data: image });
  } catch (error) {
    console.error("Fetch by ID Error:", error.message);
    res.status(500).json({ success: false, message: "Failed to fetch entry" });
  }
};

// Delete before-after image by ID
export const deleteBeforeAfterImage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ success: false, message: "Invalid ID" });

  try {
    const image = await BeforeAfterImage.findById(id);
    if (!image)
      return res
        .status(404)
        .json({ success: false, message: "Entry not found" });

    // Build full file paths using uploadDir
    const beforePath = path.join(uploadDir, image.beforeImage.data);
    const afterPath = path.join(uploadDir, image.afterImage.data);

    // Delete files if exist
    if (fs.existsSync(beforePath)) fs.unlinkSync(beforePath);
    if (fs.existsSync(afterPath)) fs.unlinkSync(afterPath);

    await BeforeAfterImage.findByIdAndDelete(id);

    res
      .status(200)
      .json({ success: true, message: "Entry deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error.message);
    res.status(500).json({ success: false, message: "Failed to delete entry" });
  }
};
