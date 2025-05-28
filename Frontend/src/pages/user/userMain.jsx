import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import "./i18n.js";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/main.css";
import "./index.css";

export default function UserMain() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
