import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/Logo/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl shadow-lg p-8 w-full max-w-3xl text-center">
        <img
          src={logo}
          alt="Dereje Tura Engineering"
          className="mx-auto mb-4 w-28 h-28 object-contain bg-white p-2 rounded-lg shadow-md"
        />
        <h2 className="text-2xl font-bold">
          Welcome to Dereje Tura Engineering Admin Panel
        </h2>
        <p className="text-lg opacity-90 mt-2">
          Manage your services, track operations, and keep everything running
          smoothly.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-4xl">
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
          onClick={() => navigate("/blogs")}
        >
          <FaPlus /> <span>Create Blog</span>
        </button>
        <button
          className="bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
          onClick={() => navigate("/services")}
        >
          <FaPlus /> <span>Add Service</span>
        </button>
        <button
          className="bg-gradient-to-r from-teal-600 to-teal-400 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
          onClick={() => navigate("/bloghistory")}
        >
          <span>View Blog History</span>
        </button>
        <button
          className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
          onClick={() => navigate("/servicehistory")}
        >
          <span>View Service History</span>
        </button>
      </div>

      {/* Logout Button */}
      <div className="mt-10">
        <button
          className="bg-gradient-to-r from-red-600 to-red-400 text-white font-semibold py-3 px-8 rounded-xl shadow-md flex items-center space-x-2 hover:scale-105 transition-transform"
          onClick={handleLogout}
        >
          <FaSignOutAlt /> <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
