// src/services/loginApi.js

const HOST = import.meta.env.VITE_HOST;
const loginApi = async (email, password) => {
  try {
    const response = await fetch(`${HOST}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save token in localStorage after successful login
      localStorage.setItem("adminToken", data.token);
      return data;
    } else {
      throw new Error(data.message || "Login failed");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default loginApi;
