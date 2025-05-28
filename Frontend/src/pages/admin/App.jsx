import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Blog from "./pages/blogs/Blog";
import BlogHistory from "./pages/blogs/BlogHistory";
import Service from "./pages/service/Service";
import ServiceHistory from "./pages/service/ServiceHistory";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useEffect } from "react";
import BeforeAfterImage from "./pages/beforeAfterImage/beforeAfterImage";
import BeforeAfterImageHistory from "./pages/beforeAfterImage/BeforeAfterImageHistory";

function App() {
  const { authState } = useContext(AuthContext);
  // const navigate = useNavigate();

  useEffect(() => {
    // Prevent back navigation if the user is authenticated
    if (authState.isAuthenticated) {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
      };
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      window.onpopstate = null;
    };
  }, [authState.isAuthenticated]);

  return (
    <>
      {authState.isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/bloghistory"
          element={
            <PrivateRoute>
              <BlogHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/services"
          element={
            <PrivateRoute>
              <Service />
            </PrivateRoute>
          }
        />
        <Route
          path="/servicehistory"
          element={
            <PrivateRoute>
              <ServiceHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/beforeafter"
          element={
            <PrivateRoute>
              <BeforeAfterImage />
            </PrivateRoute>
          }
        />
        <Route
          path="/beforeafterhistory"
          element={
            <PrivateRoute>
              <BeforeAfterImageHistory />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
