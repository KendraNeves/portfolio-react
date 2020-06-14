import React from "react"
import ColorBlock from "./pink-block"

/*
Example usage (like in index.js right now):
<Arrow color="#123456" zIndex="-3" height="500">
  your content here
</Arrow>
*/
const Arrow = props => {
  return (
    <React.Fragment>
      {/* This div is the full arrow */}
      <div
        style={{
          zIndex: props.zIndex || -1,
          position: "relative",
          height: props.height || 675,
          marginBottom: -1 * props.height || -675,
        }}
      >
        <ColorBlock
          blockColor={props.arrowColor}
          height={props.height ? props.height - 75 : 600}
        />
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

      {/* This div is the content that gets overlaid on the arrow. Notice it wraps props.children . */}
      <div
        style={{
          height: props.height ? props.height - 75 : 600,
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Arrow
