import { create } from "zustand";
const HOST = import.meta.env.VITE_HOST;
export const useBeforeAfterImageStore = create((set) => ({
  beforeAfterImages: [],

  // Fetch all images
  fetchBeforeAfterImages: async () => {
    try {
      const res = await fetch(`${HOST}/beforeAfterImages`);
      if (!res.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await res.json();
      set({ beforeAfterImages: data.data });
      console.log("Fetched images:", data.data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  },

  // Create a new Before/After image
  createBeforeAfterImage: async (newImages) => {
    if (!newImages.beforeImage || !newImages.afterImage) {
      return { success: false, message: "Please select both images" };
    }

    const formData = new FormData();
    formData.append("beforeImage", newImages.beforeImage);
    formData.append("afterImage", newImages.afterImage);

    try {
      const res = await fetch(`${HOST}/beforeAfterImages`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to upload images");

      const data = await res.json();
      set((state) => ({
        beforeAfterImages: Array.isArray(state.beforeAfterImages)
          ? [...state.beforeAfterImages, data.data]
          : [data.data],
      }));

      return { success: true, message: "Images uploaded successfully" };
    } catch (error) {
      console.error("Upload error:", error.message);
      return { success: false, message: "Upload failed. See backend logs." };
    }
  },

  // Update existing images
  updateBeforeAfterImage: async (id, updatedImages) => {
    const formData = new FormData();
    if (updatedImages.beforeImage)
      formData.append("beforeImage", updatedImages.beforeImage);
    if (updatedImages.afterImage)
      formData.append("afterImage", updatedImages.afterImage);

    try {
      const res = await fetch(`${HOST}/beforeAfterImages/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to update images");

      const data = await res.json();

      set((state) => ({
        beforeAfterImages: state.beforeAfterImages.map((img) =>
          img._id === id ? { ...img, ...data.data } : img
        ),
      }));

      return { success: true, message: "Images updated successfully" };
    } catch (error) {
      console.error("Update error:", error.message);
      return { success: false, message: "Update failed. See backend logs." };
    }
  },

  // Delete images
  deleteBeforeAfterImage: async (id) => {
    try {
      const res = await fetch(`${HOST}/beforeAfterImages/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete image");

      set((state) => ({
        beforeAfterImages: state.beforeAfterImages.filter(
          (img) => img._id !== id
        ),
      }));

      return { success: true, message: "Image deleted successfully" };
    } catch (error) {
      console.error("Delete error:", error.message);
      return { success: false, message: "Delete failed. See backend logs." };
    }
  },
}));
