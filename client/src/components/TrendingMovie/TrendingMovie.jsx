import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import useFetch from "../../hooks/useFetch";

function TrendingMovie() {
  const [page, setPage] = useState(1);
  const url = `http://localhost:5000/api/movie/trending?page=1`;

  const {isLoading, data, error} = useFetch(url)


  if(!data) return
  if(error) return <p>Somethign went wrong : {error}</p>
  if(isLoading) return <p>loading...</p>




  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieCard movies={data?.results} />
    </div>
  );
}

export default TrendingMovie;
