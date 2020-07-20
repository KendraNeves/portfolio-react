import React from "react";
import "../index.css";
import { Container } from "react-bootstrap";

const SkillIcon = (props) => {
  const { alt, iconPic, color, margin, name, iconSize, fontSize, marginTop } = props;

  return (
    <Container fixed style={{ display: "inline" }}>
      <i
        alt={alt}
        className={iconPic}
        style={{
          color: color || "#8cbcd0",
          margin: margin || "40px 40px 0px 40px",
          fontSize: iconSize || "70px",
        }}
      >
        <p style={{ fontSize: fontSize || "20px", marginTop: marginTop || "0px" }}>{name}</p>
      </i>
    </Container>
  );
};

export default SkillIcon;
