import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const JumbotronPage = () => {
  return (
    <Container fluid>
      <Row>
        <div style={{ height: 200 }}></div>
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
        <Col lg={8}>{"Web Developer"}</Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
};

export default JumbotronPage;
