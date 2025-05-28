// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import AuthProvider from "./contexts/AuthContext.jsx";
// createRoot(document.getElementById("root")).render(
//   <AuthProvider>
//     <BrowserRouter>
//       <StrictMode>
//         <App />
//       </StrictMode>
//     </BrowserRouter>
//   </AuthProvider>
// );

// src/components/AdminMain.jsx
import React, { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css"; // adjust path if needed
import App from "./App.jsx"; // adjust path if needed
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext.jsx"; // adjust path if needed

export default function AdminMain() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </AuthProvider>
  );
}
