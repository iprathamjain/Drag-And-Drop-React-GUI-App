import React from "react";
import { connect } from "react-redux";

import { saveTemplate, clearTemplate } from "../../store/actions/canvasAction";
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

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar_logo" />
      <p className="navbar_brand">React GUI Builder</p>
      <div className="navbar_btn">
        <button className="button-outline s-transparent" onClick={handleSave}>
          Save
        </button>
        <button className="button-outline a-transparent" onClick={handleClear}>
          Clear
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
