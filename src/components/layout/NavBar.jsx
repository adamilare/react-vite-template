import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => (
  <div className="navbar">
    <span className="nav-brand">Brand</span>
    <div className="nav-links">
      <NavLink to="/">Home</NavLink>
    </div>
    <button type="button" className="nav-user">
      <FaUserAlt />
    </button>
  </div>
);

export default NavBar;
