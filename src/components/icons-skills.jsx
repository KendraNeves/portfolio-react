import React from "react";
import "../index.css";
import { Container } from "react-bootstrap";

const SkillIcon = (props) => {
  const { alt, iconPic, name, fontSize } = props;

  return (
    <Container fixed style={{ display: "inline" }}>
      <i
        alt={alt}
        className={iconPic}
        style={{
          color: "#8cbcd0",
          margin: "40px 40px 0px 40px",
          fontSize: "70px",
        }}
      >
        <p style={{ fontSize: fontSize || "20px" }}>{name}</p>
      </i>
    </Container>
  );
};

export default SkillIcon;
