import React from "react";
import "./FilterPanel.style.scss";

const FilterPanel = (props) => {
  const onInputChange = (e) => {
    props.handleSetSearchAndSortParams(e.target.name, e.target.value);
  };

  const onReset = (e) => {
    e.preventDefault();
    props.handleSetSearchAndSortParams("searchTerm", "");
    props.handleSetSearchAndSortParams("sortMethod", "recommended");
  };

  return (
    <div className="filters">
      <form className="h-form">
        <label className="h-label">Search Term</label>
        <input
          className="h-input"
          type="text"
          name="searchTerm"
          value={props.searchTerm}
          onChange={onInputChange}
          maxLength={20}
        />
        <label className="h-label">Sort Results By</label>
        <select
          className="h-select"
          name="sortMethod"
          value={props.sortMethod}
          onChange={onInputChange}
          className="select"
        >
          <option value="recommended">Recommended</option>
          <option value="low-to-high">Price low-to-high</option>
          <option value="high-to-low">Price high-to-low</option>
        </select>
        <button className="h-btn" name="reset" onClick={(e) => onReset(e)}>
          Reset Search Params
        </button>
      </form>
    </div>
  );
};

export default FilterPanel;
