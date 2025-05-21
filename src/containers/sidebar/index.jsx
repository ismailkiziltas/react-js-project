import React from "react";
import "./_sidebar.scss";
import Navbar from "../navbar";
import Button from "../../components/button";
import { IoExitOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <FaUserCircle className="user" />
        <Navbar />
      </div>
      <Button className="log-out" label="Log out" icon={<IoExitOutline />} />
    </div>
  );
};

export default Sidebar;
