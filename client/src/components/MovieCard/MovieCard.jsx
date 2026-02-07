import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ movies }) {
  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <img src={movie.poster_img_url} alt={movie.title} width={200} />
          <div className={styles.info}>
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <p>Release: {movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
