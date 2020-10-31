import React from "react";
import { connect } from "react-redux";

import logo from "../../assets/logo.png";

function Navbar(props) {
  // Clear the canvas
  const handleClear = () => {
    document.getElementById("canvas").innerHTML = null;
    document.querySelector(".txt").style.display = "block";
    props.onClear();
  };

  // Save the template
  const handleSave = () => {
    let data = document.getElementById("canvas").innerHTML;
    props.onSave(data);
    console.log(data);
  };

  // Export as HTML
  const handlePublish = () => {
    generateHtml();
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar_logo" />
      <p className="navbar_brand">React GUI Builder</p>
      <div className="navbar_btn">
        <button className="button-outline transparent" onClick={handleSave}>
          Save
        </button>
        <button className="button-outline transparent" onClick={handleClear}>
          Clear
        </button>
        <button className="button neon" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (data) => {
      dispatch(saveTemplate(data));
    },
    onClear: () => {
      dispatch(clearTemplate());
    },
  };
};

export default connect(null, mapDispatchToProps)(Navbar);

// Fetch DOM contents and export as HTML file
const generateHtml = () => {
  let cssText = document.getElementsByTagName("style")[0].firstChild.data;
  let windowContent =
    "<!DOCTYPE html><html><head><title>Build from React UI Builder</title></head><style lang='scss'>";
  windowContent +=
    cssText +
    "</style><body>" +
    document.getElementById("canvas").innerHTML +
    "</body></html>";
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/html;charset=utf-8," + encodeURIComponent(windowContent)
  );
  element.setAttribute("download", "Build file");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
