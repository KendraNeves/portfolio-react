import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./jumbotron-page.css"

const JumbotronPage = () => {
  return (
    <Container id="top" fluid>
      <Row>
        <div style={{ height: 100 }}></div>
      </Row>
      <Row className="text-center">
        <Col lg={2}></Col>
        <Col
          lg={8}
          style={{
            fontSize: "8rem",
            color: "#ffffff",
            fontFamily: "Trocchi",

            // "Comfortaa', cursive",
            /* font-family: "Alice", serif; */
            /* font-family: "Averia Serif Libre", cursive; */
            /* font-family: "Be Vietnam", sans-serif; */
            // =======Favorite=============
            /* font-family: 'Overlock', cursive; */
            // =================================
            /* font-family: 'Sarabun', sans-serif; */
            /* font-family: 'Scada', sans-serif; */
            /* font-family: 'Secular One', sans-serif; */
            /* font-family: 'Trocchi', serif; */
          }}
        >
          {"Kendra Neves"}
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row className="text-center">
        <Col lg={2}></Col>
        <Col lg={8}>
          <p class="rotatingText">
            I'm a &hellip;
            <span class="rotatingText-adjective">Software Engineer</span>
            <span class="rotatingText-adjective">Dog mom</span>
            <span class="rotatingText-adjective">Nutella Addict</span>
            <span class="rotatingText-adjective">perfect</span>
            <span class="rotatingText-adjective">perfect</span>

          </p>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
};

export default JumbotronPage;
