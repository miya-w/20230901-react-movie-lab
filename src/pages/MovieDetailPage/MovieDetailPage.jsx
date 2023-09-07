// MovieDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import movies from "../../data";

function MovieDetailPage() {

  const { movieName } = useParams();

  // Find the movie details based on the movieName
  const movie = movies.find((movie) => movie.title === movieName);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <img src={movie.posterPath} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Cast: {movie.cast.join(", ")}</p>
    </div>
  );
}

export default MovieDetailPage;
