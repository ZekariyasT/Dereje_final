import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Correct path
import Header from "./Header";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { authState, logout } = useContext(AuthContext); // Get authState and logout from context

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div>
        {authState.isAuthenticated ? (
          <>
            <Header />
            {/* <Sidebar /> */}
            <button className="btn btn-light" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
