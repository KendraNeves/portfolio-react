import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./title";
import SkillIcon from "./icons-skills";

class SkillsSection extends Component {
  state = {};
  render() {
    return (
      <Container id="skills" fluid>
        <Title title={"Skills"} />
        <Row noGutters>
          <Col className="text-center mx-5">
            <SkillIcon alt="Git icon" iconPic="fab fa-git-alt" name="Git" />
            <SkillIcon
              alt="React.js icon"
              iconPic="fab fa-react"
              name="React"
            />
            <SkillIcon
              alt="Node.js icon"
              iconPic="fab fa-node"
              name="Node.js"
            />
            <SkillIcon alt="HTML icon" iconPic="fab fa-html5" name="HTML 5" />
            <SkillIcon
              alt="Javascript icon"
              iconPic="fab fa-js-square"
              name="Javascript"
            />
            <SkillIcon alt="CSS icon" iconPic="fab fa-css3-alt" name="CSS 3" />
            <SkillIcon alt="mySQL icon" iconPic="fab icon-mysql" name="MySQL" />
            <SkillIcon
              alt="Mongodb icon"
              iconPic="fab icon-mongodb"
              name="MongoDB"
            />
            <SkillIcon
              alt="Bootstrap icon"
              iconPic="fab fa-bootstrap"
              name="Bootstrap"
            />
            <SkillIcon
              alt="heroku icon"
              iconPic="fab icon-heroku"
              name="Heroku"
            />
            <SkillIcon
              alt="jQuery icon"
              iconPic="fab icon-jquery"
              name="jQuery"
            />
          </Col>
        </Row>
        <Row noGutters>
          <Col className="text-center">
            <SkillIcon iconPic="fab" name="WebPack" fontSize="22px" />
            <SkillIcon iconPic="fab" name="Express" fontSize="22px" />
            <SkillIcon iconPic="fab" name="Handlebars" fontSize="22px" />
            <SkillIcon iconPic="fab" name="React Router" fontSize="22px" />
            <SkillIcon iconPic="fab" name="Redux" fontSize="22px" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SkillsSection;
