import React from 'react';

const SortBar = ({ onSort }) => {
  const handleChange = event => {
    const sortBy = event.target.value;
    onSort(sortBy);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;