import { create } from "zustand";

const HOST = import.meta.env.VITE_HOST;
export const useBlogStore = create((set) => ({
  blogs: [], // Ensure blogs is initialized as an array

  //  Fetch all blogs from the backend
  fetchBlogs: async () => {
    try {
      const res = await fetch(`${HOST}/blogs`);
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await res.json();
      set({ blogs: data.data }); // Ensure data is an array
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  },

  //  Create a new blog (POST)
  createBlog: async (newBlog) => {
    if (!newBlog.title || !newBlog.content || !newBlog.image) {
      return { success: false, message: "Please fill all fields" };
    }

    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("image", newBlog.image); //  Ensure correct key name

    try {
      const res = await fetch(`${HOST}/blogs`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to create blog");
      }

      const data = await res.json();

      set((state) => ({
        blogs: [...state.blogs, data.data], //  Append the new blog
      }));

      return { success: true, message: "Blog created successfully" };
    } catch (error) {
      console.error("Fetch error:", error.message);
      return { success: false, message: "Network error. Check backend logs." };
    }
  },

  //  Update an existing blog (PUT)
  updateBlog: async (id, updatedBlog) => {
    if (!updatedBlog.title || !updatedBlog.content) {
      return { success: false, message: "Title and content are required" };
    }

    try {
      const res = await fetch(`${HOST}/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
      });

      if (!res.ok) {
        throw new Error("Failed to update blog");
      }

      const data = await res.json();

      set((state) => ({
        blogs: state.blogs.map((blog) =>
          blog.id === id ? { ...blog, ...data.data } : blog
        ),
      }));

      return { success: true, message: "Blog updated successfully" };
    } catch (error) {
      console.error("Fetch error:", error.message);
      return { success: false, message: "Network error. Check backend logs." };
    }
  },

  // Delete a blog (DELETE)
  deleteBlog: async (id) => {
    try {
      const res = await fetch(`${HOST}/blogs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete blog");
      }

      set((state) => ({
        blogs: state.blogs.filter((blog) => blog._id !== id),
      }));

      return { success: true, message: "Blog deleted successfully" };
    } catch (error) {
      console.error("Fetch error:", error.message);
      return { success: false, message: "Network error. Check backend logs." };
    }
  },
}));
