import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBJumbotron fluid style={{ backgroundColor: "#dea6af" }}>
      <MDBContainer>
        <h2 className="display-4">Kendra Neves</h2>
        <p className="lead">Frontend Software Engineer</p>
      </MDBContainer>
    </MDBJumbotron>
  );
};

export default JumbotronPage;
