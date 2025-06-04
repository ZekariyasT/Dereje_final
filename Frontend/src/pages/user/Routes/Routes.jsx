import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";
import BlogPage from "../Pages/BlogPage";
import BlogDetail from "../components/blog/BlogDetail";
import ContactPage from "../Pages/ContactPage";
import BeforeAfterImagePage from "../Pages/BeforeAfterImage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/service",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail></BlogDetail>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/beforeAfterImage",
        element: <BeforeAfterImagePage></BeforeAfterImagePage>,
      },
    ],
  },
]);
