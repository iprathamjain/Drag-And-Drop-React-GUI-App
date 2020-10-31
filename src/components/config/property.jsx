import React from "react";

function Property(props) {
  let ele = document.getElementById(props.currentElt);
  let name = ele.nodeName;
  let renderDiv =
    name === "DIV" || name === "TEXTAREA" ? (
      divHook(ele, props, name)
    ) : name === "INPUT" ? (
      inputHook(ele, props)
    ) : name === "BUTTON" ? (
      buttonHook(ele, props)
    ) : (
      <div>loading...</div>
    );

  return (
    <div className="property">
      <p>Properties</p>
      {renderDiv}
    </div>
  );
}

export { Property };

// For Div and Textarea Element
const divHook = (ele, props, name) => {
  let data = {
    width: "200",
    height: "100",
    bg: "",
    placeholder: "",
  };
  const changeHandle = (e) => {
    data = { ...data, [e.target.id]: e.target.value };
  };
  const submitHandle = () => {
    ele.style.width = `${data.width}px`;
    ele.style.height = `${data.height}px`;
    if (name === "TEXTAREA") {
      ele.setAttribute("placeholder", `${data.placeholder}`);
    } else {
      ele.style.backgroundColor = data.bg;
    }
  };

  // Entirely remove the element from parent
  const deleteHandle = () => {
    ele.remove();
    props.getCurrentEle(null);
  };

  const cancelHandle = () => {
    props.getCurrentEle(null);
    if (name === "TEXTAREA") {
      ele.style.border = "1px solid #ccc";
    }
    ele.style.border = "1px solid black";
  };
  let divBlock = (
    <div>
      <p>Width:</p>
      <input
        id="width"
        type="number"
        placeholder="Enter value in px"
        className="form-item"
        defaultValue={data.width}
        onChange={changeHandle}
      ></input>
      <p>Height:</p>
      <input
        id="height"
        type="number"
        placeholder="Enter value in px"
        className="form-item"
        defaultValue={data.height}
        onChange={changeHandle}
      ></input>
      {name === "TEXTAREA" ? (
        <>
          <p>Placeholder:</p>
          <input
            id="placeholder"
            className="form-item"
            placeholder="Enter Plcaeholder"
            defaultValue={data.placeholder}
            onChange={changeHandle}
          ></input>
        </>
      ) : (
        <>
          <p>Background:</p>
          <input
            id="bg"
            className="form-item"
            placeholder="Enter color name"
            defaultValue={data.bg}
            onChange={changeHandle}
          ></input>
        </>
      )}
      <div className="btnGroup">
        <button type="submit" className="button warning" onClick={submitHandle}>
          Submit
        </button>
        <button type="submit" className="button secondary" onClick={cancelHandle}>
          Cancel
        </button>
        <button className="button alert" type="submit" onClick={deleteHandle}>
          Delete
        </button>
      </div>
    </div>
  );
  return divBlock;
};

// For Input Element
const inputHook = (ele, props) => {
  let data = { type: "text", placeholder: "" };
  const changeHandle = (e) => {
    data = { ...data, [e.target.id]: e.target.value };
  };
  const submitHandle = () => {
    ele.setAttribute("type", `${data.type}`);
    ele.setAttribute("placeholder", `${data.placeholder}`);
    if (data.type === "button") {
      ele.innerHTML = "Click Here";
      ele.classList.remove("form-item");
      ele.classList.add("button");
    }
  };

  // Entirely remove the element from parent
  const deleteHandle = () => {
    ele.remove();
    props.getCurrentEle(null);
  };

  const cancelHandle = () => {
    props.getCurrentEle(null);
    ele.style.border = "1px solid #ccc";
  };
  let inputBlock = (
    <div>
      <p>Type:</p>
      <select id="type" className="form-item" onChange={changeHandle}>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="button">Button</option>
      </select>
      <p>Placeholder:</p>
      <input
        id="placeholder"
        type="text"
        placeholder="Enter value"
        className="form-item"
        defaultValue={data.placeholder}
        onChange={changeHandle}
      ></input>
      <div className="btnGroup">
        <button type="submit" className="button warning" onClick={submitHandle}>
          Submit
        </button>
        <button type="submit" className="button secondary" onClick={cancelHandle}>
          Cancel
        </button>
        <button className="button alert" type="submit" onClick={deleteHandle}>
          Delete
        </button>
      </div>
    </div>
  );
  return inputBlock;
};

// For button Element
const buttonHook = (ele, props) => {
  let data = { text: "Click Here", type: "primary" };
  const changeHandle = (e) => {
    data = { ...data, [e.target.id]: e.target.value };
  };
  const submitHandle = () => {
    ele.innerHTML = data.text;
    ele.className = "";
    data.type === ""
      ? ele.classList.add("boardElt", "button")
      : ele.classList.add("boardElt", "button", data.type);
  };

  // Entirely remove the element from parent
  const deleteHandle = () => {
    ele.remove();
    props.getCurrentEle(null);
  };

  const cancelHandle = () => {
    props.getCurrentEle(null);
    ele.style.border = "1px solid transparent";
  };
  let buttonBlock = (
    <div>
      <p>Type:</p>
      <select id="type" className="form-item" onChange={changeHandle}>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="alery">Alert</option>
      </select>
      <p>Text:</p>
      <input
        id="text"
        type="text"
        placeholder="Enter value"
        className="form-item"
        defaultValue={data.text}
        onChange={changeHandle}
      ></input>
      <div className="btnGroup">
        <button type="submit" className="button warning" onClick={submitHandle}>
          Submit
        </button>
        <button type="submit" className="button secondary" onClick={cancelHandle}>
          Cancel
        </button>
        <button className="button alert" type="submit" onClick={deleteHandle}>
          Delete
        </button>
      </div>
    </div>
  );
  return buttonBlock;
};
