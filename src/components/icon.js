import React from "react";
import "../index.css";

const Icon = (props) => {
  const { href, alt, iconPic } = props;

  return (
    <a href={href} target="_blank" aria-label={alt}>
      <i
        className={iconPic}
        style={{
          color: props.color || "#ffffff",
          margin: props.margin || "10px 10px 10px 10px",
          fontSize: props.iconSize || "25px",
        }}
      ></i>
    </a>
  );
};

export default Icon;
