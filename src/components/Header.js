import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="success" variant="dark">
        <Navbar.Brand href="#home">LikeMySong</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Link 2">Link 2</Nav.Link>
          <Nav.Link href="#About Us">About Us</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;