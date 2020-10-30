import React from "react";
import { connect } from "react-redux";

function Topbar(props) {
    const clearHandle = () => {
        document.getElementById("canvas").innerHTML = null;
        document.querySelector(".txt").style.display = "block";
        props.onClear();
    };

    const saveHandle = () => {
        let content = document.getElementById("canvas").innerHTML;
        props.onSave(content);
        console.log(content);
    };

    const publishHandle = () => {
        makeHTML();
    };

    return (
        <div className="topbar">
            <img src={logo} alt="logo" className="topbarLogo"/>
            <p className="topbarTitle">GUI Builder</p>
            <div className="navbtns">
                <button className="button secondary" onClick={clearHandle}> Clear</button>
                <button className="button primary" onClick={saveHandle}> Clear</button>
                <button className="button success" onClick={publishHandle}> Clear</button>
            </div>
        </div>
    );
}