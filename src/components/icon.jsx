import React from "react";
import "../index.css";

const Icon = (props) => {
  const { href, alt, iconPic } = props;

  return (
    <a href={href} target="_blank" aria-label={alt}>
      <i
        className={iconPic}
        style={{
          color: "#000000",
          margin: "10px 0 10px 20px",
          fontSize: "30px",
        }}
      ></i>
    </a>
  );
};

export default Icon;
