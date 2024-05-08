import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  const [amountInCart, setAmountInCart] = useState(0)

//   return (
//     <div>
//         <NavLink
//           to="/"
//           className="nav-link"
//           sticky="top" 
//         >
//           Shop
//         </NavLink>
//         <NavLink
//           to="/about"
//           className="nav-link"
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/careers"
//           className="nav-link"
//         >
//           Careers
//         </NavLink>
//         <NavLink
//           to="/faq"
//           className="nav-link"
//         >
//           FAQ
//         </NavLink>
//         <NavLink
//           to="/cupcakedesignergame"
//           className="nav-link"
//         >
//           Cupcake Designer
//         </NavLink>
//         <NavLink
//           to="/cart"
//           className="nav-link-cart"
//         >
//           <span className="cart-count">{amountInCart}</span>
//           <img class="cart-image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl_aQdeTGTSExSdx0fY80gsnW9t7xXUYS7ZAM6u3mHQ&s"} ></img>
//           Cart
//         </NavLink>
// </div>
//   );


  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
      <Navbar.Brand href="/">CGC</Navbar.Brand>
        <Nav className="nav-bar">
          <Nav.Link href="/">Shop</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="careers">Careers</Nav.Link>
          <Nav.Link href="faq">FAQ</Nav.Link>
          <Nav.Link href="cupcakedesignergame">Cupcake Designer</Nav.Link>
          <Nav.Link href="cart" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl_aQdeTGTSExSdx0fY80gsnW9t7xXUYS7ZAM6u3mHQ&s"}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default NavBar;
