import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Correct path

const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext); // Access authState

  return authState.isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
