import React, { Component } from "react"
import Icon from "./icon"

const SideBar = () => {
  return (
    <div
      style={{
        zIndex: 2,
        position: "fixed",
        bottom: "100px",
        width: "40px",
        height: "400px",
      }}
    >
      <Icon href="#" ariaLabel="up chevron" iconPic="fas fa-chevron-up" />
      <Icon
        href="https://github.com/KendraNeves"
        ariaLabel="GitHub icon"
        iconPic="fab fa-github"
      />
      <Icon
        href="https://www.linkedin.com/in/kendraneves/"
        ariaLabel="Linked In icon"
        iconPic="fab fa-linkedin"
      />
      <Icon
        href="https://twitter.com/kendraneves"
        ariaLabel="Twitter icon"
        iconPic="fab fa-twitter"
      />
      <Icon href="#" ariaLabel="Email icon" iconPic="fas fa-envelope" />
      <Icon href="#" ariaLabel="resume icon" iconPic="far fa-file" />
      <Icon href="#" ariaLabel="down chevron" iconPic="fas fa-chevron-down" />
    </div>
  )
}

export default SideBar
