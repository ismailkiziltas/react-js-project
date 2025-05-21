import "./_navbar.scss";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <FaHome />
        <Link to="/">Home</Link>
      </li>
      <li className="menu-item">
        <FaUsers />
        <Link to="/users">Users</Link>
      </li>
      <li className="menu-item">
        <IoSettings />
        <Link to="/system-settings">Systems</Link>
      </li>
    </ul>
  );
};

export default Navbar;
