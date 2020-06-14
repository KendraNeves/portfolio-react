import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./project-card";

class ProjectSection extends Component {
  state = {};

  renderCards(cards) {
    const items = [];
    let trio = [];

    for (let i = 0; i < cards.length; i++) {
      trio.push(
        <Col xs={12} md={true} className="text-center">
          <ProjectCard {...cards[i]} />
        </Col>
      );

      if (i % 3 === 2) {
        items.push(<Row>{trio}</Row>);

        trio = [];
      }
    }

    return items;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>Projects</Col>
        </Row>
        {this.renderCards(this.props.children)}
      </Container>
    );
  }
}

export default ProjectSection;
