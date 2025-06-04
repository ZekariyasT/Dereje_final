import React, { useState } from "react";
import loginApi from "../../../services/LoginApi";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Fix folder name

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get the login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginApi(email, password);
      login(data.token); // Use the login function from context
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow-sm w-50 w-sm-75">
        <h1 className="text-center mb-4 fs-3 fw-bold text-black">
          <FaUserShield
            className="mb-2"
            style={{ fontSize: "2rem", color: "#000000" }}
          />
          Admin Login
        </h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn position-absolute end-0 top-50 translate-middle-y me-2"
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: "none", border: "none" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="btn btn-dark w-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
