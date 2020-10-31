import React from "react";

import { SetPosition } from "./position";
import "./config.scss";
import { Property } from "./property";

function Config(props) {
  return (
    <div className="col flex-1 config">
      <p className="config_title">Configuration</p>
      <SetPosition getCurrentPos={props.getCurrentPos} />
      {props.currentElt === null ? null : (
        <Property
          currentElt={props.currentElt}
          getCurrentElt={props.getCurrentElt}
        />
      )}
    </div>
  );
}

export { Config };
