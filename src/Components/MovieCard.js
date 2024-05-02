import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css"; // Ensure the CSS file is imported correctly

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="MovieCard">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={`${movie.title} poster`}
        className="MovieImage"
      />
      <div className="MovieInfo">
        <h2 className="MovieTitle">{movie.title}</h2>
        <p className="MovieReleaseYear">
          Release Year: {new Date(movie.release_date).getFullYear()}
        </p>
        <p className="MovieRating">Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
