import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function MovieDetails() {
    const { movieId } = useParams();
  return (
    <div>{movieId}</div>
  )
}

export default MovieDetails