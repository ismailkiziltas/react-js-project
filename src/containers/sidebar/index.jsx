import React from "react";
import "./_sidebar.scss";
import Navbar from "../navbar";
import Button from "../../components/button";
import { IoExitOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Button className="log-out" label="Log out" icon={<IoExitOutline />} />
    </div>
  );
};

export default Sidebar;
