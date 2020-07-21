import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "./title";
import ContactMeIcon from "./icons-contact-me";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container id="about-me" fluid>
        <Title title={"About Me"} />
        <Row>
          <Col lg={1}></Col>
          <Col md={12} lg={3}>
            <Image
              src={
                process.env.PUBLIC_URL + "/images/saf-cherry-blossoms-frame.png"}
              rounded
              fluid
            />
          </Col>

          <Col md={12} lg={6} className="mt-3" style={{ color: "#747373", fontSize: "18px" }}>
            {
              "Front-end software engineer leveraging ICU nursing background to create a more performant and accessible user experience on the web. I’m a recent graduate of Johns Hopkins University full-stack development bootcamp, where I created responsive web applications utilizing React.js, JavaScript, Node.js, and several CSS frameworks. As a former ICU nurse serving the diverse community of Baltimore, I worked with a large united team responsible for saving patient’s lives. As a result, I excel at time management, continuously assess the priority of my tasks, and address problems early and efficiently. I use these skills to create sites that are intuitive, accessible, and responsive. I’m excited to contribute my skills and experience to a strong team dedicated to developing customer-focused applications."}
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;

