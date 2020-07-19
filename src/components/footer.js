import React from "react";
import { MDBFooter } from "mdbreact";
import Icon from "./icon";
import Title from "./title";
import ContactMeIcon from "./icons-contact-me";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#dea6af" }}
      className="font-small pt-4"
      id="bottom"
    >
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            <Title title={"Contact Me"} />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="text-center">
            <Icon
              href="https://github.com/KendraNeves"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
            <Icon
              href="https://www.linkedin.com/in/kendraneves/"
              alt="Linked In icon"
              iconPic="fab fa-linkedin"
            />
            <Icon
              href="https://twitter.com/kendraneves"
              alt="Twitter icon"
              iconPic="fab fa-twitter"
            />
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row className="mt-5">
          <Col md={1}></Col>
          <Col className="text-center"><Icon href="#" alt="Email icon" iconPic="fas fa-envelope" /><p></p></Col>
          <Col className="text-center" style={{ borderLeft: "1px solid #e6dbc9", borderRight: "1px solid #e6dbc9" }}><Icon href="#" alt="resume icon" iconPic="far fa-file" /></Col>
          <Col className="text-center">
            <Icon href="tel:2039485436" alt="phone icon" iconPic="fas fa-mobile-alt" />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row className="mb-5">
          <Col md={1}></Col>
          <Col className="text-center col-sm-12">{"kendraneves@gmail.com"}</Col>
          <Col className="text-center col-sm-12">{"Resume"}</Col>
          <Col className="text-center col-sm-12">{"(203)948-5436"}</Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <div className="footer-copyright py-3">
        <Row>
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright Kendra Neves
          </Container>
          <Container fluid>
            Built with:{" "}
            <Icon
              href="https://github.com/KendraNeves/portfolio-react"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
            <Icon href="" alt="React Icon" iconPic="fab fa-react" />
            <Icon href="" alt="Node Icon" iconPic="fab fa-node" />
            <Icon href="" alt="Javascript Icon" iconPic="fab fa-js-square" />
            <Icon href="" alt="MDB Icon" iconPic="fab fa-mdb" />
            <Icon href="" alt="Bootstrap Icon" iconPic="fab fa-bootstrap" />
            <Icon
              href=""
              alt="Font Awesome Icon"
              iconPic="fab fa-font-awesome-flag"
            />
          </Container>
        </Row>
      </div>
    </MDBFooter>
  );
};

export default Footer;
