import React from "react";
import { useMovieContext } from "../../../context/movieContext";
import MovieCard from "../MovieCard/MovieCard";

function Favorite() {
  const { favorites, toggleFavoriteMovie, isFavorite } = useMovieContext();
  return (
    <>
    <h1>Favorite Movies</h1>
    <MovieCard movies={favorites} />;
    </>
  )
}

export default Favorite;
