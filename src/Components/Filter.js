import React from "react";


const Filter = ({ genres, handleFilter }) => {
  const handleChange = (event) => {
    handleFilter(event.target.value);
  };

  return (
    <select onChange={handleChange} className="genreSelect">
      <option value="">Filter by Genre</option>
      {genres.map((genre, index) => (
        <option key={index} value={genre.id} className="option">
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
