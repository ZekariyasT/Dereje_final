import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/blogs/Blog";
import BlogHistory from "./pages/blogs/BlogHistory";
import Service from "./pages/service/Service";
import ServiceHistory from "./pages/service/ServiceHistory";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useEffect } from "react";
import BeforeAfterImage from "./pages/beforeAfterImage/beforeAfterImage";
import BeforeAfterImageHistory from "./pages/beforeAfterImage/BeforeAfterImageHistory";
import logo from "./assets/Logo/logo.png";

function App() {
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    if (authState.isAuthenticated) {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
      };
    }

    return () => {
      window.onpopstate = null;
    };
  }, [authState.isAuthenticated]);

  const Sidebar = () => (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={logo}
          alt="Dereje Tura Engineering"
          className="mx-auto w-20 h-20 object-contain bg-white p-2 rounded-lg shadow-md mb-4"
        />
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-nav">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/blogs">Add Blog</Link></li>
        <li><Link to="/bloghistory">Blog History</Link></li>
        <li><Link to="/services">Add Service</Link></li>
        <li><Link to="/servicehistory">Service History</Link></li>
        <li><Link to="/beforeafter">Add Before/After</Link></li>
        <li><Link to="/beforeafterhistory">Before/After History</Link></li>
      </ul>
    </div>
  );

  return (
    <>
      {!authState.isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <div className="admin-layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
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
          </main>
        </div>
      )}
    </>
  );
}

export default App;
