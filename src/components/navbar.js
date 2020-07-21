import React from "react";
import { Navbar, Nav, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-scroll"


const NavBar = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar expand="lg" style={{ width: "100vw", boxShadow: "none", padding: "30px 30px 0 30px" }} variant="dark">
          <Navbar.Brand href="#home" className="p-2" style={{ fontFamily: "Leckerli One", fontSize: "1.75rem" }}> Kendra Neves</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{ fontSize: "1.4rem" }}>
              <Link
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Nav.Link href="#home">About Me</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Nav.Link href="#link">Projects</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Nav.Link href="#link">Skills</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                to="bottom"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <Nav.Link href="#link">Contact</Nav.Link>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>

    </Container >

  );
};

export default NavBar;
