import React from "react";
import DropDown from "../DropDown/DropDown";
import ColorDropDown from "../ColorDropDown/ColorDropDown";

export default function ListToolBar({
  setCurrentMethod,
  currentMethod,
  currentColor,
  setCurrentColor,
  setValue,
  setIndex,
  updateNodes,
  value,
  indexValue,
}) {
  let inputs;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateNodes();
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleIndexChange = (e) => {
    const currentValue = e.target.value;
    const regex = /^\d+$/;
    console.log(regex.test(currentValue));

    if (regex.test(currentValue)) {
      setIndex(parseInt(currentValue));
    } else if (currentValue === "") {
      setIndex("");
    }
  };

  if (currentMethod === "push" || currentMethod === "unshift") {
    inputs = (
      <>
        <div className="ListToolBar-valueContainer">
          <label htmlFor="valueInput" className="ListToolBar-label">
            value
          </label>
          <input
            value={value}
            id="valueInput"
            type="text"
            className="ListToolBar-valueInput"
            onChange={handleValueChange}
          />
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
          <label htmlFor="valueInput" className="ListToolBar-label">
            value
          </label>
          <input
            value={value}
            id="valueInput"
            type="text"
            className="ListToolBar-valueInput"
            onChange={handleValueChange}
          />
        </div>

        <div className="ListToolBar-indexContainer">
          <label htmlFor="indexInput" className="ListToolBar-label">
            Index #
          </label>
          <input
            value={indexValue}
            id="indexInput"
            type="text"
            className="ListToolBar-indexInput"
            onChange={handleIndexChange}
          />
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
          <label htmlFor="indexInput" className="ListToolBar-label">
            Index #
          </label>
          <input
            value={indexValue}
            id="indexInput"
            type="text"
            className="ListToolBar-indexInput"
            onChange={handleIndexChange}
          />
        </div>
      </>
    );
  }
  return (
    <form className="ListToolBar" onSubmit={handleFormSubmit}>
      <div className="ListToolBar-methodContainer">
        <div className="ListToolBar-label">Method</div>
        <DropDown
          setCurrentMethod={setCurrentMethod}
          currentMethod={currentMethod}
        />
      </div>

      {inputs ? inputs : null}

      <div className="ListToolBar-submitContainer">
        <button className="ListToolBar-submit">submit</button>
      </div>
    </form>
  );
}
