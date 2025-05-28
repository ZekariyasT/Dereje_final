import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-7 left-0 h-screen w-1/4">
      {/* Toggle Button for Mobile */}
      <button
        className="p-2 fixed top-4 left-4 z-50 md:hidden bg-gray-800 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-300 text-white w-3/4 h-full fixed top-0 left-0 transition-transform transform shadow-lg z-40 
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static flex flex-col pt-5`}
      >
        {/* Navigation */}
        <nav className="w-full px-5">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="hover:text-gray-500 flex items-center space-x-2 text-decoration-none"
              >
                <span className="text-3xl">🏠</span>
                <span className="text-base">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-gray-500 flex items-center space-x-2 text-decoration-none"
              >
                <span className="text-3xl">📝</span>
                <span className="text-base">Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/bloghistory"
                className="hover:text-gray-500 flex items-center space-x-2 text-decoration-none"
              >
                <span className="text-3xl">📜</span>
                <span className="text-base">Blog History</span>
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-500 flex items-center space-x-2 text-decoration-none"
              >
                <span className="text-3xl">🛠</span>
                <span className="text-base">Services</span>
              </Link>
            </li>
            <li>
              <Link
                to="/servicehistory"
                className="hover:text-gray-500 flex items-center space-x-2 text-decoration-none"
              >
                <span className="text-3xl">📂</span>
                <span className="text-base">Service History</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
