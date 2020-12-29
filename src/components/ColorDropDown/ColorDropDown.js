import React, { useState, useEffect } from "react";

export default function ColorDropDown(props) {
  const [isOpen, toggleOpen] = useState(false);
  const [colors, setColors] = useState([]);

  // Updates colors to all colors except currently selected method
  useEffect(() => {
    const allColors = ["green", "red", "purple", "yellow", "black", "blue"];
    const filteredList = allColors.filter(
      (color) => color !== props.currentColor
    );
    setColors(filteredList);
  }, [props.currentColor]);

  const handleCurrentClick = () => {
    toggleOpen(!isOpen);
  };

  const handleColorClick = (e) => {
    props.setCurrentColor(e.target.id);
    toggleOpen(!isOpen);
  };

  return (
    <div className="ColorDropDown">
      <div className="ColorDropDown-current" onClick={handleCurrentClick}>
        <div
          className="ColorDropDown-colorBox"
          style={{ backgroundColor: props.currentColor }}></div>
      </div>
      <ul className="ColorDropDown-list">
        {isOpen &&
          colors.map((color) => (
            <li
              className="ColorDropDown-color"
              id={color}
              onClick={handleColorClick}>
              <div
                className="ColorDropDown-colorBox"
                style={{ backgroundColor: color }}></div>
            </li>
          ))}
      </ul>
    </div>
  );
}
