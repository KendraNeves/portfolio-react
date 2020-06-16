import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./title";
import Icon from "./icon";

class SkillsSection extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Title title={"Skills"} />
        <Row>
          <Col className="text-center">
            <Icon
              href="https://github.com/KendraNeves"
              alt="Git icon"
              iconPic="fab fa-git-alt"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="React.js icon"
              iconPic="fab fa-react"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="Node.js icon"
              iconPic="fab fa-node"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="HTML icon"
              iconPic="fab fa-html5"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="Javascript icon"
              iconPic="fab fa-js-square"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="CSS icon"
              iconPic="fab fa-css3-alt"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="Bootstrap icon"
              iconPic="fab fa-bootstrap"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="mySQL icon"
              iconPic="icon-mysql"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="Mongodb icon"
              iconPic="icon-mongodb"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="heroku icon"
              iconPic="icon-heroku"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />
            <Icon
              alt="jQuery icon"
              iconPic="icon-jquery"
              margin={"40px 40px 40px 40px"}
              iconSize={"70px"}
              color={"#8cbcd0"}
            />

            <Icon />
          </Col>
        </Row>
        <Row>
          <Col>
            {"Express Routing, Handlebars, React Router, ES6, Redux, WebPack"}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SkillsSection;
