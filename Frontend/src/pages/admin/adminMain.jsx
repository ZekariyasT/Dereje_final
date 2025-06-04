import React, { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css"; // adjust path if needed
import App from "./App.jsx"; // adjust path if needed
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext.jsx"; // adjust path if needed
import './i18n';

export default function AdminMain() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/admin">
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </AuthProvider>
  );
}
