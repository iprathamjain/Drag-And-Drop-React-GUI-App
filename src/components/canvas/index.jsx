import React, { useEffect } from "react";
import { connect } from "react-redux";

import { createElement } from "../helper/helper";
import "./canvas.scss";

function Canvas(props) {
  useEffect(() => {
    console.log(props.data);
    if (props.data !== null) {
      const txt = document.querySelector(".txt");
      txt.style.display = "none";
      document.getElementById("canvas").innerHTML = props.data;
    }
  }, [props.data]);

  const drop = (e) => {
    let width = document.getElementById("canvas").offsetWidth - 38;
    const card_id = e.dataTransfer.getData("card_id");
    if (card_id.length === 6) {
      let ele = document.getElementById(card_id);
      ele.style.position = "absolute";
      ele.style.left = e.clientX + "px";
      ele.style.top = e.clientY + "px";
      e.target.appendChild(ele);
    } else if (props.currentPos === "absolute") {
      let dm = createElement(card_id, width);
      dm.style.position = "absolute";
      dm.style.left = e.clientX + "px";
      dm.style.top = e.clientY + "px";
      e.target.appendChild(dm);
    } else {
      e.target.appendChild(createElement(card_id, width));
    }
    e.preventDefault();
    const txt = document.querySelector(".txt");
    txt.style.display = "none";
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClick = (e) => {
    let els = document.getElementsByClassName("canvasEle");
    if (e.target.id === "canvas") {
      props.getCurrentEle(null);
    }
    for (let i = 0; i < els.length; i++) {
      let ele = document.getElementById(els[i].id);
      if (els[i].id === e.target.id) {
        ele.style.border = "2px dotted red";
        props.getCurrentEle(e.target.id);
      } else if (ele.nodeName === "DIV") {
        ele.style.border = "1px solid black";
      } else if (ele.nodeName === "BUTTON") {
        ele.style.border = "1px solid transparent";
      } else {
        ele.style.border = "1px solid #ccc";
      }
    }
  };

  const handleDragStart = (e) => {
    if (e.target.id !== "canvas") {
      e.dataTransfer.setData("card_id", e.target.id);
    }
  };

  return (
    <div className="col flex-2 board">
      <div
        id="canvas"
        className="canvas"
        onDrop={drop}
        onDragOver={dragOver}
        onClick={handleClick}
        onDragStart={handleDragStart}
      ></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.Canvas;
};

export default connect(mapStateToProps)(Canvas);
