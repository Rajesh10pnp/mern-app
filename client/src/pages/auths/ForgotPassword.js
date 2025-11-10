import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forget-password", {
        email,
        newPassword,
        answer
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
         
        navigate("/login");
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
          <p>Reset Your Password</p>

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
              <label>Reset Password</label>
              <input
                type="password"
                name="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group">
              <label>Secret Answer</label>
              <input
                type="text"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your Secret Answer"
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="auth-btn login-btn">
                Save Password
              </button>
            </div>
          </form> 
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
