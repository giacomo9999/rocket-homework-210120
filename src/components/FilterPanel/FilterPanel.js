import React from "react";
import "./FilterPanel.style.scss";

const FilterPanel = (props) => {
  const onInputChange = (e) => {
    props.handleSetSearchAndSortParams(e.target.name, e.target.value);
  };

  const onReset = () => {
    props.handleSetSearchAndSortParams("searchTerm", "");
    props.handleSetSearchAndSortParams("sortMethod", "recommended");
  };

  return (
    <div className="filters">
      Hotel Name
      <input
        className="input"
        type="text"
        name="searchTerm"
        value={props.searchTerm}
        onChange={onInputChange}
        maxLength={20}
      />
      Sort Results By
      <select
        name="sortMethod"
        value={props.sortMethod}
        onChange={onInputChange}
        className="select"
      >
        <option value="recommended">Recommended</option>
        <option value="low-to-high">Price low-to-high</option>
        <option value="high-to-low">Price high-to-low</option>
      </select>
      <button className="button" name="reset" onClick={() => onReset()}>
        Reset Search Params
      </button>
    </div>
  );
};

export default FilterPanel;
