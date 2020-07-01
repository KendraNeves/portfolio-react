import React from "react";
import Icon from "./icon";
import ContactMeIcon from "./icons-contact-me";

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

      <ContactMeIcon />
      <Icon href="#" alt="down chevron" iconPic="fas fa-chevron-down" />
    </div>
  );
};

export default SideBar;
