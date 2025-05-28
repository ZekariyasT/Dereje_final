import React, { useState } from "react";
import { useBlogStore } from "../../services/blog";

const Blog = () => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { createBlog } = useBlogStore();
  const handleAddBlog = async () => {
    console.log("New Blog State:", newBlog); // Debugging log

    if (!newBlog.title || !newBlog.content || !newBlog.image) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await createBlog(newBlog);

      if (response.success) {
        alert(response.message);
        setNewBlog({ title: "", content: "", image: null });
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error uploading blog:", error);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card p-4 shadow-lg col-12 col-md-8 col-lg-6">
        <h3 className="text-center mb-4">Create Blog</h3>

        {/* Title Input */}
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Blog Title"
          name="title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />

        {/* Content Input */}
        <textarea
          className="form-control mb-2"
          placeholder="Write your blog content here..."
          rows="5"
          name="content"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        ></textarea>

        {/* Image Upload */}
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile02"
            accept="image/*"
            name="image"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setNewBlog({ ...newBlog, image: e.target.files[0] });
              }
            }}
          />
          <label className="input-group-text" htmlFor="inputGroupFile02">
            Upload
          </label>
        </div>

        {/* Save Button */}
        <button className="btn btn-primary w-100" onClick={handleAddBlog}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Blog;
