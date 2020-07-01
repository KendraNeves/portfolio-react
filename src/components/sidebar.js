import React from "react";
import Icon from "./icon";
import ContactMeIcon from "./icons-contact-me";
import { Link } from "react-scroll"
import "./sidebar.css"

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
      className="sidebar"
    >
      <Link
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1500}
      >
        <Icon alt="up chevron" iconPic="fas fa-chevron-up" />
      </Link>
      <ContactMeIcon />
      <Link
        activeClass="active"
        to="bottom"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1500}
      >
        <Icon href="#" alt="down chevron" iconPic="fas fa-chevron-down" />
      </Link>
    </div>
  );
};

export default SideBar;
