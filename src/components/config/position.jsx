import React, { useState } from "react";

function SetPosition(props) {
  const [val, setVal] = useState("static");
  const changeHandle = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = () => {
    props.getCurrentPos(val);
    console.log(val);
  };
  return (
    <div className="position">
      <div className="position_select">
        <select className="form-item" onChange={changeHandle}> 
          <option value="static">Static</option>
          <option value="absolute">Absolute</option>
        </select>
        <button type="submit" className="button position_btn warning" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export { SetPosition };
