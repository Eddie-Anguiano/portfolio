import React from "react";
import DropDown from "../DropDown/DropDown";
import ColorDropDown from "../ColorDropDown/ColorDropDown";

export default function ListToolBar(props) {
  return (
    <form action="" className="ListToolBar">
      <div className="ListToolBar-methodContainer">
        <div className="ListToolBar-label">Method</div>
        <DropDown
          setCurrentMethod={props.setCurrentMethod}
          currentMethod={props.currentMethod}
        />
      </div>

      <div className="ListToolBar-valueContainer">
        <div className="ListToolBar-label">value</div>
        <input type="text" className="ListToolBar-valueInput" />
      </div>

      <div className="ListToolBar-colorContainer">
        <div className="ListToolBar-label">color</div>
        <ColorDropDown
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
      </div>
      <div className="ListToolBar-submitContainer">
        <button className="ListToolBar-submit">submit</button>
      </div>
    </form>
  );
}
