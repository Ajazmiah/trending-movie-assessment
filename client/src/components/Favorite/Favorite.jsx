import React from "react";
import { useMovieContext } from "../../../context/movieContext";
import MovieCard from "../MovieCard/MovieCard";

function Favorite() {
  const { favorites, toggleFavoriteMovie, isFavorite } = useMovieContext();
  return (
    <>
      <h1>Favorite Movies</h1>

      {favorites.length > 0 ? (
        <MovieCard movies={favorites} />
      ) : (
        <p>No Favorite Movies</p>
      )}
    </>
  );
}

export default Favorite;
