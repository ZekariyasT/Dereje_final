import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import ServicesPage from "../Pages/ServicesPage";



import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";

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
          path: "/contact",
          element: <ContactPage></ContactPage>,
        },

      ],
    }, 
              
  ]);