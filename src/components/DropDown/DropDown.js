import React, { useState, useEffect } from "react";

export default function DropDown(props) {
  const [isOpen, toggleOpen] = useState(false);
  const [items, setItems] = useState([]);

  // Updates items to all items except currently selected method
  useEffect(() => {
    const allMethods = ["push", "pop", "shift", "unShift", "get", "set"];
    const filteredList = allMethods.filter(
      (item) => item !== props.currentMethod
    );
    setItems(filteredList);
  }, [props.currentMethod]);

  // Click handler for top block
  const handleCurrentClick = () => {
    toggleOpen(!isOpen);
  };

  // Click handler for drop down items
  const handleItemClick = (e) => {
    props.setCurrentMethod(e.target.id);
    toggleOpen(!isOpen);
  };

  return (
    <div className="DropDown">
      <div className="DropDown-current" onClick={handleCurrentClick}>
        {props.currentMethod}
      </div>
      <ul className="DropDown-list">
        {isOpen &&
          items.map((item) => (
            <li className="DropDown-item" id={item} onClick={handleItemClick}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
