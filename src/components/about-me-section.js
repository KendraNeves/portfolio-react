import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "./title";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container id="about-me" fluid>
        <Title title={"About Me"} id="about-me" />
        <Row>
          <Col lg={1}></Col>
          <Col md={12} lg={3}>
            <Image
              src={
                process.env.PUBLIC_URL + "/images/saf-cherry-blossoms-frame.png"
              }
              rounded
              fluid
            />
          </Col>

          <Col md={12} lg={6} className="mt-3">
            {
              "Front-End Developer creating a more performant and accessible user experience on the web. I recently earned a certificate in full-stack web development from Johns Hopkins University, where I created responsive web applications utilizing React.js, JavaScript, Node.js, and several CSS frameworks. As a former ICU nurse serving the diverse community of Baltimore, I worked cohesively with a large united team responsible for saving patient’s lives. As a result, I excel at time management, continuously assess the priority of my tasks, and address problems early and efficiently. I use these skills to create sites that are intuitive, accessible, and responsive. I recently worked on a team of four to create a web application that empowers users to monitor the toilet paper stock in their local stores amid the Covid-19 pandemic. I’m enthusiastic about contributing my skills and experiences to a strong team dedicated to developing user-focused applications."
            }
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
