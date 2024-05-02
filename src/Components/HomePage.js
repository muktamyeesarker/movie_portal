import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Pagination from "./Pagination";
import api from "./API";
import "../Components/HomePage.css"; // Make sure the correct CSS file is referenced

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let data;
      if (searchQuery !== "") {
        data = await api.searchMovies(searchQuery, currentPage);
      } else if (selectedGenre) {
        data = await api.getMoviesByGenre(selectedGenre, currentPage);
      } else {
        data = await api.getTopRatedMovies(currentPage); // Ensure currentPage is included
      }
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };

    fetchMovies();
  }, [searchQuery, selectedGenre, currentPage]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = await api.getGenres();
      setGenres(genresData);
    };

    fetchGenres();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilter = (genreId) => {
    setSelectedGenre(genreId);
    setCurrentPage(1); // Reset to page 1 when the genre changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <SearchBar handleSearch={handleSearch} />
      <Filter genres={genres} handleFilter={handleFilter} />
      <div className="MoviesGrid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
