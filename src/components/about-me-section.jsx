import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "./title";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Title title={"About Me"} />
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

          <Col md={12} lg={6} className="mt-5">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
