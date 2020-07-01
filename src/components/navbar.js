import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";

const NavBar = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar expand="lg" style={{ width: "100%", boxShadow: "none" }} variant="dark" bg="#dea6af">
          <Navbar.Brand href="#home" className="p-2"> Kendra Neves</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">About Me</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>

    </Container >

  );
};

export default NavBar;
