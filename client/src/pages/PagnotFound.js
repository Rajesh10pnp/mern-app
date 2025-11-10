import React from "react";
import Layout from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";

const PagnotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 👈 Goes to the previous page
  };
  return (
    <Layout>
      {" "}
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1 style={{ fontSize: "5rem", color: "#dc3545" }}>404</h1>
        <h3>Oops! Page Not Found</h3>
        <p>The page you’re looking for doesn’t exist or may have been moved.</p>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleGoBack}
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            🔙 Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#198754",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🏠 Go Home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PagnotFound;
