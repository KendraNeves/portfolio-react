import React from "react";

/*
Example usage (like in index.js right now):
<Arrow color="#123456" zIndex="-3" height="500">
  your content here
</Arrow>
*/
const Arrow = (props) => {
  let useHeight = props.height ? Number(props.height) : 675;
  let topPad = props.padTop ? 100 : 0;
  let bottomPad = props.padBottom ? 75 : 0;

  return (
    <React.Fragment>
      {/* This div is the full arrow */}
      <div
        style={{
          position: "relative",
          minHeight: useHeight,
          marginBottom: bottomPad,
        }}
      >
        {props.padTop && <div style={{ height: topPad }} />}
        <div
          style={{
            position: "relative",
            top: 0,
            minHeight: useHeight - (75 + topPad),
            width: "100%",
            zIndex: 1,
          }}
        >
          {props.children}
        </div>
        <div
          minHeight={useHeight}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: props.zIndex || -1,
            backgroundColor: props.arrowColor,
          }}
        >
          <div style={{ height: "100%" }} />
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 102"
            version="1.1"
            style={{ width: `100%`, height: 75, position: "relative", top: -1 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0 L50 100 L100 0 Z" fill={props.arrowColor}></path>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Arrow;
