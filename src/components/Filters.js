import React, { useState } from 'react';
import '../filtration/Filtration.css';
import options from '../filtration/options';


function Filters( {filters, setFilters} ) {

  const [filtersVisible, setFiltersVisible] = useState(true)

  const handleToggleFilters = () => {
    setFiltersVisible(!filtersVisible)
  }

  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }))
  }

  return (
    <div className="filtration-container">
      <button className="toggle-button" onClick={handleToggleFilters}>Filters</button>
      {filtersVisible && (<div className="filters">
        {Object.entries(options).map(([filter, values]) => (
          <select
            key={filter}
            value={filters[filter]}
            onChange={(e) => handleFilterChange(filter, e.target.value)}
          >
            {values.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ))}
      </div>)}
    </div>
  );
}

export default Filters;