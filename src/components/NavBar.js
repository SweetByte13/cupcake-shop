import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>
      <Navbar.Brand href="/">CGC</Navbar.Brand>
        <Nav className="nav-bar">
          <Nav.Link href="/">Shop</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="careers">Careers</Nav.Link>
          <Nav.Link href="faq">FAQ</Nav.Link>
          <Nav.Link href="cart" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl_aQdeTGTSExSdx0fY80gsnW9t7xXUYS7ZAM6u3mHQ&s"}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default NavBar;
