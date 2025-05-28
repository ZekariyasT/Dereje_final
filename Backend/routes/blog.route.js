import express from "express";

import {
  commentOnBlog,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlog);
router.put("/:id", updateBlog);

router.post("/:blogId/comments", commentOnBlog);

router.post("/", createBlog);

router.delete("/:id", deleteBlog);

export default router;
