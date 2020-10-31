import React, { useState } from "react";

import Item from "./items";
import { Config } from "./config";
import Canvas from "./canvas";

function Appcontainer() {
  const [currentEle, setCurrentEle] = useState(null);
  const [currentPos, setCurrentPos] = useState("static");

  const getCurrentEle = (val) => {
    setCurrentEle(val);
  };

  const getCurrentPos = (val) => {
    setCurrentPos(val);
  };

  return (
    <div className="app-container">
      <Item currentPos={currentPos} />
      <Canvas
        currentPos={currentPos}
        currentEle={currentEle}
        getCurrentEle={getCurrentEle}
      />
      <Config
        currentEle={currentEle}
        getCurrentEle={getCurrentEle}
        getCurrentPos={getCurrentPos}
      />
      <div className="txt">Drag and Drop Components Here.</div>
    </div>
  );
}

export { Appcontainer };
