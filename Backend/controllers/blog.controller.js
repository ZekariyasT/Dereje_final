import { Blog, Comment } from "../models/post.model.js";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { uploadSingle } from "../middlewares/upload.js";

// Adjust this to match your uploads folder location — e.g., one level above backend if you moved uploads outside backend
const uploadsDir = path.join(process.cwd(), "blogsImage");

// Fetch all blogs
export const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ success: true, data: blogs });
  } catch (error) {
    console.error("Error in getBlog:", error.message);
    res.status(500).json({ success: false, message: "Failed to fetch blogs" });
  }
};

// Update a blog by ID
export const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid blog ID" });
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }
    res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    console.error("Error in updateBlog:", error.message);
    res.status(500).json({ success: false, message: "Failed to update blog" });
  }
};

// Post a comment on a blog
export const commentOnBlog = async (req, res) => {
  const { blogId } = req.params;
  const { text } = req.body;

  if (!text) {
    return res
      .status(400)
      .json({ success: false, message: "Comment text is required" });
  }

  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    const comment = new Comment({ text });
    blog.comments.push(comment);
    await blog.save();

    res
      .status(201)
      .json({ success: true, message: "Comment added", data: blog });
  } catch (error) {
    console.error("Error in commentOnBlog:", error.message);
    res.status(500).json({ success: false, message: "Failed to add comment" });
  }
};

// Upload middleware with correct field name for the file input ("image" is the field name from frontend formData)
const blogUpload = uploadSingle("image", "blogsImage");

export const createBlog = (req, res) => {
  blogUpload(req, res, async (err) => {
    if (err) {
      console.error("Upload error:", err.message);
      return res.status(400).json({ success: false, message: err.message });
    }

    const { title, content } = req.body;

    if (!title || !content || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Title, content, and image are required",
      });
    }

    const newBlog = new Blog({
      title,
      content,
      image: {
        data: req.file.filename, // store just filename
        contentType: req.file.mimetype,
      },
    });

    try {
      await newBlog.save();
      res.status(201).json({ success: true, data: newBlog });
    } catch (error) {
      console.error("Error in createBlog:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Failed to create blog" });
    }
  });
};

// Delete a blog by ID
export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid blog ID" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    }

    // Use absolute path for the image to delete
    const imagePath = path.join(uploadsDir, blog.image.data);

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await Blog.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error in deleteBlog:", error.message);
    res.status(500).json({ success: false, message: "Failed to delete blog" });
  }
};
