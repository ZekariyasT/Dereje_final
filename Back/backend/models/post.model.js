import mongoose, { Mongoose } from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    data: String,
    contentType: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  file: {
    data: String,
    contentType: String,
  },
});

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      data: String,
      contentType: String,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);
const Comment = mongoose.model("Comment", commentSchema);
const Product = mongoose.model("product", productSchema);

export { Blog };
export { Comment };
export { Product };
