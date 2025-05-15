import React from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <Link to="/">Home</Link>
      </li>
      <li className="menu-item">
        <Link to="/users">Users</Link>
      </li>
      <li className="menu-item">
        <Link to="/system-settings">Systems</Link>
      </li>
    </ul>
  );
};

export default Navbar;
