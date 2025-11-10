import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import Spinner from "../../../components/Spinner";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("/api/v1/auth/user-auth", {
          headers: { Authorization: auth?.token },
        });
        if (res.data.ok) setOk(true);
        else navigate("/logi", { state: location.pathname });
      } catch (error) {
        navigate("/login", { state: location.pathname });
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token, navigate, location.pathname]);

  return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;
