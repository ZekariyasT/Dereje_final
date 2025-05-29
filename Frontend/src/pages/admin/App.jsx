import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
import { FaSignOutAlt } from "react-icons/fa";

function App() {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
      <div className="sidebar-footer">
        <button
          onClick={handleLogout}
          className="w-full group relative inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <FaSignOutAlt className="mr-2 text-xl" />
          <span className="relative text-base">Logout</span>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
        </button>
      </div>
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
