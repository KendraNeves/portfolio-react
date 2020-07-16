import React from "react";

const Title = (props) => {
  return (
    <h1 className="text-center mt-3 mb-4" style={{ color: "#ffffff", fontSize: "4rem" }}>
      {props.title}
    </h1>
  );
};

export default Title;
