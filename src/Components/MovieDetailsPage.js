import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "./API";
import "../styles/MovieDetailsPage.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await api.getMovieDetails(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <p>Plot Summary: {movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <h3>Cast:</h3>
          <div>
            {movie.credits.cast.slice(0, 10).map((member) => (
              <div key={member.cast_id}>
                {member.name} as {member.character}
              </div>
            ))}
          </div>
          <Link to="/">Back to Home</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
