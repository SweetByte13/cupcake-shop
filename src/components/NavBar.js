import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [amountInCart, setAmountInCart] = useState(0)

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
        <span className="cart-count">{amountInCart}</span>
         <img class="cart-image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl_aQdeTGTSExSdx0fY80gsnW9t7xXUYS7ZAM6u3mHQ&s"} ></img>
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