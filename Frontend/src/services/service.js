import { create } from "zustand";
const HOST = import.meta.env.VITE_HOST;
export const useServiceStore = create((set) => ({
  services: [], // Ensure services is initialized as an array

  // Fetch services
  fetchServices: async () => {
    try {
      const res = await fetch(`${HOST}/api/products`);
      if (!res.ok) {
        throw new Error("Failed to fetch services");
      }

      const data = await res.json();
      set({ services: data.data }); // Store the fetched services in the state
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  },

  // Create a service
  createService: async (newService) => {
    if (
      !newService.title ||
      !newService.image ||
      !newService.price ||
      !newService.pdf ||
      !newService.description
    ) {
      return { success: false, message: "Please fill all fields" };
    }

    const formData = new FormData();
    formData.append("title", newService.title);
    formData.append("image", newService.image);
    formData.append("description", newService.description);
    formData.append("price", newService.price);
    formData.append("pdf", newService.pdf);

    try {
      const res = await fetch(`${HOST}/api/products`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to create service");
      }

      const data = await res.json();

      set((state) => ({
        services: Array.isArray(state.services)
          ? [...state.services, data.data]
          : [data.data], // Ensure state.services is always an array
      }));

      return { success: true, message: "Service created successfully" };
    } catch (error) {
      console.error("Fetch error:", error.message);
      return { success: false, message: "Network error. Check backend logs." };
    }
  },

  // Update a service
  updateService: async (updatedService) => {
    if (!updatedService.id) {
      return { success: false, message: "Service ID is required for update" };
    }

    const formData = new FormData();
    formData.append("title", updatedService.title || "");
    formData.append("image", updatedService.image || "");
    formData.append("description", updatedService.description || "");
    formData.append("price", updatedService.price || "");
    formData.append("pdf", updatedService.pdf || "");

    try {
      const res = await fetch(`${HOST}/api/products/${updatedService.id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to update service");
      }

      const data = await res.json();

      set((state) => ({
        services: state.services.map((service) =>
          service.id === updatedService.id ? data.data : service
        ),
      }));

      return { success: true, message: "Service updated successfully" };
    } catch (error) {
      console.error("Fetch error:", error.message);
      return { success: false, message: "Network error. Check backend logs." };
    }
  },

  // Delete a service
  deleteService: async (id) => {
    try {
      const res = await fetch(`${HOST}/api/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete service");
      }

      const data = await res.json();

      set((state) => ({
        services: state.services.filter((service) => service._id !== id),
      }));

      return {
        success: true,
        message: data.message || "Service deleted successfully",
      };
    } catch (error) {
      console.error("Fetch error:", error.message);
      return { success: false, message: "Network error. Check backend logs." };
    }
  },
}));
