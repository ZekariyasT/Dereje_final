import { create } from "zustand";

export const useServiceStore = create((set) => ({
  services: [], // Ensure services is initialized as an array

  // Fetch services
  fetchServices: async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      if (!res.ok) {
        throw new Error("Failed to fetch services");
      }

      const data = await res.json();
      set({ services: data.data }); // Store the fetched services in the state
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  },
}));
