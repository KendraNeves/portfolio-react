import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./jumbotron-page.css"

const JumbotronPage = () => {
  return (
    <Container id="top" fluid>
      <Row>
        <div style={{ height: 75 }}></div>
      </Row>
      <Row>
        <Col
          className="text-center"
          style={{
            fontSize: "7rem",
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
          <Row><Col className="text-center pb-5 mb-2" style={{
            fontSize: "1.5rem",
            lineHeight: "1rem",
            fontFamily: "Roboto"
          }}> Software Engineer</Col></Row>

        </Col>

      </Row>
      <Row className="text-center">
        <Col>
          <p class="rotatingText text-center">
            I'm a &hellip;
            <span class="rotatingText-adjective">Software Engineer</span>
            <span class="rotatingText-adjective">Dog mom</span>
            <span class="rotatingText-adjective">Nutella Addict</span>
            <span class="rotatingText-adjective">perfect</span>
            <span class="rotatingText-adjective">perfect</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default JumbotronPage;
