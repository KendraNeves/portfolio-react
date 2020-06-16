import React from "react";
import Icon from "./icon";

const SideBar = () => {
  return (
    <div
      style={{
        zIndex: 2,
        position: "fixed",
        bottom: "100px",
        width: "40px",
        height: "400px",
        marginLeft: "30px",
      }}
    >
      <Icon href="#" alt="up chevron" iconPic="fas fa-chevron-up" />
      <Icon
        href="https://github.com/KendraNeves"
        alt="GitHub icon"
        iconPic="fab fa-github"
      />
      <Icon
        href="https://www.linkedin.com/in/kendraneves/"
        alt="Linked In icon"
        iconPic="fab fa-linkedin"
      />
      <Icon
        href="https://twitter.com/kendraneves"
        alt="Twitter icon"
        iconPic="fab fa-twitter"
      />
      <Icon href="#" alt="Email icon" iconPic="fas fa-envelope" />
      <Icon href="#" alt="resume icon" iconPic="far fa-file" />
      <Icon href="#" alt="down chevron" iconPic="fas fa-chevron-down" />
    </div>
  );
};

export default SideBar;
