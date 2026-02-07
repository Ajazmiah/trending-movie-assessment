import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [page, setPage] = useState(1);
  const url = `http://localhost:5000/api/movie/trending?page=${page}`;

  const { data, isLoading, error } = useFetch(url);

  console.log(data)

  return (
    <>
      <h1>Trending Movies</h1>
      <div className="movies-grid">
        {data?.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster_img_url} alt={movie.title} width={200} />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
