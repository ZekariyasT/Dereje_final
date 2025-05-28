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
      console.log(data.data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  },
  createComment: async (blogId, text) => {
    if (!text) {
      return { success: false, message: "Comment text is required" };
    }

    try {
      const res = await fetch(`${HOST}/${blogId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        throw new Error("Failed to create comment");
      }

      const data = await res.json();

      // Optional: Update local state if needed
      set((state) => ({
        blogs: state.blogs.map((blog) =>
          blog._id === blogId
            ? { ...blog, comments: [...blog.comments, data.newComment] }
            : blog
        ),
      }));

      return { success: true, message: "Comment created successfully" };
    } catch (error) {
      console.error("Fetch error:", error.message);
      return { success: false, message: "Network error. Check backend logs." };
    }
  },
}));
