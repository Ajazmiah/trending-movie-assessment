import React from "react";
import { useMovieContext } from "../../context/movieContext";
import styles from "./MovieCard.module.css";
import {Link } from "react-router-dom";

function MovieCard({ movies }) {
  const { toggleFavoriteMovie, isFavorite } = useMovieContext();


  const handleFavorite = (e, movie) => {
    e.preventDefault();    
    e.stopPropagation(); 
    toggleFavoriteMovie(movie)
  }

  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
        <div  className={styles.movie}>
          <img src={movie.poster_img_url} alt={movie.title} width={200} />
          <div className={styles.info}>
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <p>Release: {movie.release_date}</p>
          </div>
          <button data-testId='favorite-btn' className={`${styles.favoriteBtn} ${isFavorite(movie.id) ? styles.favorited : ''}`} onClick={(e) => handleFavorite(e, movie)}>{isFavorite(movie.id) ? "-" : "+"}</button>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieCard;
