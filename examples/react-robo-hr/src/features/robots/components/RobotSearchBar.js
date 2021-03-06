import React from "react";

import SelectList from "../../../lib/components/SelectList";

const RobotSearchBar = ({
  departments,
  selectedDepartmentId,
  searchTerm,
  onDepartmentSelect,
  onSearchTermChange
}) => {
  return (
    <div className="field has-addons">
      <p className="control">
        <SelectList
          options={departments}
          value={selectedDepartmentId}
          onChange={event => onDepartmentSelect(+event.target.value)}
        >
        <option value={-1}>All</option>
        </SelectList>
      </p>

      <p className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={event => onSearchTermChange(event.target.value)}
        />
      </p>
    </div>
  );
};

RobotSearchBar.displayName = "RobotSearchBar";
export default RobotSearchBar;
