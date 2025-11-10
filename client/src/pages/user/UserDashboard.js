import React from "react";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/layout/UserMenu";

const UserDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard Admin-Dash"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 mt-5">
            <div className="card w-75 p-3">
              <span>
                <strong>Name:</strong> {auth?.user?.name}
              </span>
            </div>
            <div className="card w-75 p-3">
              <span>
                <strong>Email:</strong> {auth?.user?.email}
              </span>
            </div>
            <div className="card w-75 p-3">
              <span>
                <strong>Contact No:</strong> {auth?.user?.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
