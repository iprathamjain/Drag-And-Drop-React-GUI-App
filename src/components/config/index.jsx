import React from "react";

import { SetPosition } from "./position";
import "./config.css";
import { Property } from "./property";

function Config(props) {
  return (
    <div className="col flex-1 config">
      <p className="config_title">Preference</p>
      <SetPosition getCurrentPos={props.getCurrentPos} />
      {props.currentEle === null ? null : (
        <Property
          currentEle={props.currentEle}
          getCurrentEle={props.getCurrentEle}
        />
      )}
    </div>
  );
}

export { Config };
