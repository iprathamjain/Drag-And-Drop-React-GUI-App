import React from "react";
import { connect } from "react-redux";

import "./contents.css";

function Content(props) {
  const dragStart = (e) => {
    const target = e.target;
    if (props.currentPos === "absolute") {
      e.dataTransfer.setData("text/plain", e.clientX + "," + e.clientY);
      e.dataTransfer.setData("card_id", e.target.id);
    } else {
      e.dataTransfer.setData("card_id", target.id);
    }
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  const { wireframes, formfields, textElements } = props;

  return (
    <div className="col flex-1 content">
      <div className="content_title">Components</div>
      <div className="content_components">
        <p>Elements</p>
        {wireframes.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              draggable
              onDragStart={dragStart}
              onDragOver={dragOver}
            >
              {item.name}
            </li>
          );
        })}
        <p>Form Fields</p>
        {formfields.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              draggable
              onDragStart={dragStart}
              onDragOver={dragOver}
            >
              {item.name}
            </li>
          );
        })}
        <p>Text Elements:</p>
        {textElements.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              draggable
              onDragStart={dragStart}
              onDragOver={dragOver}
            >
              {item.name}
            </li>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.Components;
};

export default connect(mapStateToProps, null)(Content);
