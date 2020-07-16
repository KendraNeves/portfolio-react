import React from "react";
import "../index.css";
import { motion } from "framer-motion"

const Icon = (props) => {
  const { href, alt, iconPic } = props;

  return (
    // icons increase size when hovered over
    <motion.div
      whileHover={{ scale: 1.2, transition: { duration: 0 }, }}
      whileTap={{ scale: 0.9 }} style={{ display: "inline-block" }}>
      <a href={href} target="_blank" aria-label={alt}>
        <i
          className={iconPic}
          style={{
            color: props.color || "#ffffff",
            margin: props.margin || "10px 10px 10px 10px",
            fontSize: props.iconSize || "27px",
          }}
        ></i>
      </a>
    </motion.div>
  );
};

export default Icon;
