import React from "react";

const ColorBlock = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.blockColor,
        height: props.height || 600,
      }}
    ></div>
  );
};

export default ColorBlock;
