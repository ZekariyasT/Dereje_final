import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative">
      {/* Main Content */}
      <div className="p-8 flex flex-col items-center min-h-screen">
        {/* Welcome Card */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-3xl transform hover:scale-[1.01] transition-transform duration-300">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
          <div className="absolute inset-0 bg-pattern opacity-10"></div>

          <div className="relative p-8 flex flex-col items-center">
            {/* Logo Section */}
            <div className="mb-6">
              <div className="bg-white p-4 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src={logo}
                  alt="Dereje Tura Engineering"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            {/* Welcome Text */}
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Welcome Back, Admin!
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                Manage your engineering services and content with ease.
                <br />
                Access all your tools from the sidebar.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
        </div>
      </div>

      <style jsx>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
