import React, { useState } from "react";

import Content from "./content";
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
      <Content currentPos={currentPos} />
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
      <p className="txt"> Drag & Drop Components Here.</p>
    </div>
  );
}

export { Appcontainer };
