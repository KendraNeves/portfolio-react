import * as React from "react";
import { useState } from "react";
import { Frame } from "framer";

export function HamburgerSpinner() {
  const [rotate, setRotate] = useState(0);
  const toggleRotate = () => setRotate(rotate + 90);

  return (
    <Frame
      animate={{ rotate }}
      onTap={toggleRotate}
      size={150}
      radius={30}
      background={"#fff"}
    />
  );
}
