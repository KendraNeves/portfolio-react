import React, { Component } from "react"

const Icon = props => {
  return (
    <a href={props.href} target="_blank" aria-label={props.ariaLabel}>
      <i
        className={props.iconPic}
        style={{
          color: "#000000",
          margin: "10px 0 10px 20px",
          fontSize: "30px",
        }}
      ></i>
    </a>
  )
}

export default Icon
