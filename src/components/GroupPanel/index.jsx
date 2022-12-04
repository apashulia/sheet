import React from "react";
import "./groupPanel.css";

const GroupPanel = ({ options, onApply, onReset, onSelectChange }) => {
  return (
    <div className="grouping">
      <select onChange={onSelectChange} className="select">
        <option value="" defaultValue hidden>
          Choose column
        </option>
        {options.map(({ field, colId, headerName }) => {
          return (
            <option key={colId} value={colId}>
              {headerName || field}
            </option>
          );
        })}
      </select>
      <button onClick={onReset}>reset</button>
      <button onClick={onApply}>apply </button>
    </div>
  );
};

export default GroupPanel;
