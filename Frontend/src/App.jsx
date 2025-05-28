import React from "react";
import UserMain from "./pages/user/userMain";
import AdminMain from "./pages/admin/adminMain";

const App = () => {
  const path = window.location.pathname;

  if (path.startsWith("/admin")) {
    // AdminMain handles its own routing internally
    return <AdminMain />;
  }

  // UserMain uses RouterProvider internally
  return <UserMain />;
};

export default App;
