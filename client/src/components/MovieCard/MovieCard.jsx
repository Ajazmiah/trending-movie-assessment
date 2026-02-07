import React from "react";
import { useMovieContext } from "../../../context/movieContext";
import styles from "./MovieCard.module.css";

function MovieCard({ movies }) {
  const { toggleFavoriteMovie, isFavorite } = useMovieContext();


  const handleFavorite = (e, movie) => {
    toggleFavoriteMovie(movie)
  }

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
          <button className={`${styles.favoriteBtn} ${isFavorite(movie.id) ? styles.favorited : ''}`} onClick={(e) => handleFavorite(e, movie)}>{isFavorite(movie.id) ? "-" : "+"}</button>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
