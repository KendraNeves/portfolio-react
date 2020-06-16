import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./title";

class SkillsSection extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Title title={"Skills"} />
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default SkillsSection;
