import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className="nav-link"
      >
        Shop
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/careers"
        className="nav-link"
      >
        Careers
      </NavLink>
      <NavLink
        to="/faq"
        className="nav-link"
      >
        FAQ
      </NavLink>
      <NavLink
        to="/cart"
        className="nav-link"
      >
        Cart
      </NavLink>
      <NavLink
        to="/cupcakedesignergame"
        className="nav-link"
      >
        Cupcake Designer
      </NavLink>
    </nav >
  );
};

export default NavBar;