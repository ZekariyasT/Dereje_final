import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("adminToken") || null,
    isAuthenticated: !!localStorage.getItem("adminToken"),
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setAuthState({
        token: localStorage.getItem("adminToken") || null,
        isAuthenticated: !!localStorage.getItem("adminToken"),
      });
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    localStorage.setItem("lastActivity", Date.now()); // Track last activity
    setAuthState({ token, isAuthenticated: true });
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("lastActivity");
    setAuthState({ token: null, isAuthenticated: false });
  };

  useEffect(() => {
    const updateActivity = () => {
      localStorage.setItem("lastActivity", Date.now());
    };

    const checkTimeout = () => {
      const lastActivity = localStorage.getItem("lastActivity");
      if (lastActivity && Date.now() - lastActivity > 8 * 60 * 1000) {
        logout(); // Log out after 10 minutes of inactivity
      }
    };

    // Add event listeners for user activity
    window.addEventListener("mousemove", updateActivity);
    window.addEventListener("keydown", updateActivity);
    window.addEventListener("click", updateActivity);

    // Check timeout every 10 seconds
    const interval = setInterval(checkTimeout, 10000);

    return () => {
      window.removeEventListener("mousemove", updateActivity);
      window.removeEventListener("keydown", updateActivity);
      window.removeEventListener("click", updateActivity);
      clearInterval(interval);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
