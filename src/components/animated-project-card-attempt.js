import React from "react";

const AnimatedProjectCard = () => {
  return (
    <div>
      {" "}
      <div className="project-card">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/91cea4e143a427071c02ab79575140683c65ef61/601d0/assets/images/projects/unchat.webp"
          alt="unChat"
          className="project-img"
        />
        <div className="card-content">
          <h4>unChat</h4>
          <h5>
            <i className="website-i"></i>Web App
          </h5>
          <p>Receive anonymous messages from your friends, colleagues etc.</p>
          <p>
            <br />
            <strong>Technologies Used :</strong> React, &nbsp;Express,
            &nbsp;Node.js, &nbsp;MongoDB, &nbsp;SCSS etc.
          </p>

          <div className="card-icons">
            <div
              className="card-icon"
              rel="noopener"
              onclick="window.open('https://github.com/aromalanil/unChat_frontend');"
            >
              <i className="fa fa-github card-i"></i>
            </div>
            <div
              className="card-icon demo"
              rel="noopener"
              onclick="window.open('https://unChat.netlify.app');"
            >
              <i className="fa fa-link card-i"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProjectCard;
