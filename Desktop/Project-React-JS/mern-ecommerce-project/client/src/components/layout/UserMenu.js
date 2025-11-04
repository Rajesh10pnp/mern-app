import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="container-fluid m-3 p-3">
      <div className="text-center">
        <div className="list-group">
          <h2>User Panel</h2>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/order"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink> 
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
