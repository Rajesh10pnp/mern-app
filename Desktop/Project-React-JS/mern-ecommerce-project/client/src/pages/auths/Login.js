import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong ");
    }
  };

  return (
    <Layout>
      <div className="auth-container login-container">
        <div className="auth-card">
          <p>Login to your account</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="auth-btn login-btn">
                Login
              </button>
            </div>
          </form>

          <p
            type="button"
            style={{color: "red"}}
            onClick={() => {
              navigate("/forget-password");
            }}
          >
          Forgot Password ?
          </p>
          <p className="auth-link">
            Don’t have an account?
            <NavLink to="/register"> Register here</NavLink>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
