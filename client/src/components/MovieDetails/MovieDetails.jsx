import React from "react";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function MovieDetails() {
  const { movieId } = useParams();
  const url = `http://localhost:5000/api/movie/details?movieId=${movieId}`;

  const { isLoading, data: movie, error } = useFetch(url);
  console.log(movie);

  if (!movie) return;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div className={styles.movieDetails}>
      <img
        src={movie.poster_img_url}
        alt={movie.title}
        className={styles.movieImg}
      />

      <div className={styles.movieInfo}>
        <h1>{movie.title}</h1>

        <p className="tagline">"{movie?.tagline}"</p>
        <p className="overview">{movie?.overview}</p>
        <p>
          <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
        </p>

        <p>
          <strong>Release:</strong> {movie.release_date}
        </p>

        <p>
          <strong>Runtime:</strong> {movie.runtime} min
        </p>

        <p>
          <strong>Rating:</strong> {movie.vote_average.toFixed(1)} (
          {movie.vote_count} votes)
        </p>

        {movie.homepage && (
          <a href={movie.homepage} target="_blank">
            Visit Official Site
          </a>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
