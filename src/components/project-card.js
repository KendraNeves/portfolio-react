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
    <Card style={{ margin: "20px 10px 20px 10px" }}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + projectPic}
        alt={alt}
        style={{}}
      />
      <Card.Body style={{ height: "225px" }}>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{techStack}</Card.Text>
        <Icon
          href={githubUrl}
          alt="link to github repo"
          iconPic="fab fa-github"
        />
        <Icon
          href={deployedUrl}
          alt="link to deployed site"
          iconPic="fas fa-external-link-alt"
        />
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{datePosted}</small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
