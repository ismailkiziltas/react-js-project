import React from "react";
import "./_layout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
