import React from "react";
import { useMovieContext } from "../../context/movieContext";
import MovieCard from "../MovieCard/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();
  return (
    <div style={{maxWidth: '720px', margin: '0 auto'}}>
      <h1>Favorite Movies</h1>

      {favorites.length > 0 ? (
        <MovieCard movies={favorites} />
      ) : (
        <p>No Favorite Movies</p>
      )}
    </div>
  );
}

export default Favorite;
