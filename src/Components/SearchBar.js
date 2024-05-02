import React from "react";


const SearchBar = ({ handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title"
      onChange={handleChange}
      className="searchInput" // Apply the class here
    />
  );
};

export default SearchBar;
