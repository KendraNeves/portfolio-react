import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./title";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Title title={"About Me"} />
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
