import React from "react";
import { Card } from "react-bootstrap";
import Icon from "./icon";

const ProjectCard = (props) => {
  const {
    projectPic,
    alt,
    cardTitle,
    description,
    techStack,
    githubUrl,
    deployedUrl,
    datePosted,
  } = props;

  return (
    <Card style={{ margin: "20px 0px 20px 10px" }}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + projectPic}
        alt={alt}
        style={{ position: "relative" }}
      />
      <Card.Body style={{ height: "250px", backgroundColor: "#e6dbc9" }}>
        {/* Card Hover Card.Body-- TODO
        zIndex: +1, position: "relative", bottom: 225, margin: 0 */}
        <Card.Title style={{ fontSize: "27px", color: "#8cbcd0" }}>{cardTitle}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text style={{ fontSize: "17px" }}>{"Stack: "}<Card.Text>{techStack}</Card.Text></Card.Text>
      </Card.Body >
      <Card.Footer style={{ backgroundColor: "#e6dbc9", padding: "5px 20px 5px 20px" }}>
        <Icon
          href={githubUrl}
          alt="link to github repo"
          iconPic="fab fa-github"
          color="#dea6af"
        />
        <Icon
          href={deployedUrl}
          alt="link to deployed site"
          iconPic="fas fa-external-link-alt"
          color="#dea6af"
        />
      </Card.Footer>
    </Card >
  );
};

export default ProjectCard;
