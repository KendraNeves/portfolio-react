import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, Row } from "mdbreact";
import Icon from "./icon";
import Title from "./title";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          {/* <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol> */}
          <MDBCol md={3}></MDBCol>
          <MDBCol md="6" className="text-center">
            <Title title={"Contact Me"} />
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md={3}></MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright py-3">
        <Row>
          <MDBContainer fluid className="text-center">
            <Icon
              href="https://github.com/KendraNeves/portfolio-react"
              alt="GitHub icon"
              iconPic="fab fa-github"
            />
          </MDBContainer>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: Kendra Neves
          </MDBContainer>
          <MDBContainer fluid>
            Built with:{" "}
            <Icon
              href="https://github.com/KendraNeves"
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
          </MDBContainer>
        </Row>
      </div>
    </MDBFooter>
  );
};

export default Footer;
