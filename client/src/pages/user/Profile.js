import React from "react";
import Layout from "../../components/layout/Layout";
import UserMenu from "../../components/layout/UserMenu";

const Profile = () => {
  return (
    <Layout title={"User Profile"}>
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9 p-4">
          <h2>User Profile</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
