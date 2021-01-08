import React from "react";
import DropDown from "../DropDown/DropDown";
import ColorDropDown from "../ColorDropDown/ColorDropDown";

export default function ListToolBar({
  setCurrentMethod,
  currentMethod,
  currentColor,
  setCurrentColor,
  handleSubmit,
}) {
  let inputs;

  if (currentMethod === "push" || currentMethod === "unshift") {
    inputs = (
      <>
        <div className="ListToolBar-valueContainer">
          <div className="ListToolBar-label">value</div>
          <input type="text" className="ListToolBar-valueInput" />
        </div>

        <div className="ListToolBar-colorContainer">
          <div className="ListToolBar-label">color</div>
          <ColorDropDown
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div>
      </>
    );
  } else if (currentMethod === "set" || currentMethod === "insert") {
    inputs = (
      <>
        <div className="ListToolBar-valueContainer">
          <div className="ListToolBar-label">value</div>
          <input type="text" className="ListToolBar-valueInput" />
        </div>

        <div className="ListToolBar-indexContainer">
          <div className="ListToolBar-label">Index #</div>
          <input type="text" className="ListToolBar-indexInput" />
        </div>

        <div className="ListToolBar-colorContainer">
          <div className="ListToolBar-label">color</div>
          <ColorDropDown
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div>
      </>
    );
  } else if (currentMethod === "remove") {
    inputs = (
      <>
        <div className="ListToolBar-indexContainer">
          <div className="ListToolBar-label">Index #</div>
          <input type="text" className="ListToolBar-indexInput" />
        </div>
      </>
    );
  }
  return (
    <form action="" className="ListToolBar">
      <div className="ListToolBar-methodContainer">
        <div className="ListToolBar-label">Method</div>
        <DropDown
          setCurrentMethod={setCurrentMethod}
          currentMethod={currentMethod}
        />
      </div>

      {/* <div className="ListToolBar-valueContainer">
          <div className="ListToolBar-label">value</div>
          <input type="text" className="ListToolBar-valueInput" />
        </div>

        <div className="ListToolBar-colorContainer">
          <div className="ListToolBar-label">color</div>
          <ColorDropDown
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
          />
        </div> */}
      {inputs ? inputs : null}
      <div className="ListToolBar-submitContainer">
        <button className="ListToolBar-submit" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </form>
  );
}
