import { Product } from "../models/post.model.js";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { uploadMultiple, uploadDir } from "../middlewares/upload.js";

// GET all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in get Products", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// UPDATE product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const products = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, products, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Upload middleware — no subfolder now
const productUpload = uploadMultiple([
  { name: "image", maxCount: 1 },
  { name: "pdf", maxCount: 1 },
]);

// CREATE new product
export const createProduct = (req, res) => {
  productUpload(req, res, async (err) => {
    if (err) {
      console.log("Upload Error:", err.message);
      return res.status(400).json({ success: false, message: err.message });
    }

    if (!req.files || !req.files.image || !req.files.pdf) {
      return res.status(400).json({
        success: false,
        message: "Both image and document files are required!",
      });
    }

    const newProduct = new Product({
      title: req.body.title,
      image: {
        data: req.files.image[0].filename,
        contentType: req.files.image[0].mimetype,
      },
      description: req.body.description,
      price: req.body.price,
      file: {
        data: req.files.pdf[0].filename,
        contentType: req.files.pdf[0].mimetype,
      },
    });

    try {
      await newProduct.save();
      return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.log("Error in Create new Product:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  });
};

// DELETE product (with file cleanup from uploads/)
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);
  if (!product) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  // Construct full paths to image and pdf in uploads/
  const imagePath = path.join(uploadDir, product.image.data);
  const pdfPath = path.join(uploadDir, product.file.data);

  // Remove files if they exist
  if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);

  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Product not found" });
  }
};
