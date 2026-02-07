import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import useFetch from "./hooks/useFetch";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">View Favorites</Link>
        </nav>
      </header>
      <main>
        <Outlet />

        <div className="homeCTA">
          <di>
            <p> Click below to view trending movies</p>

            <Link to="/trending">Trending Movies</Link>
          </di>
        </div>
      </main>
    </div>
  );
}

export default App;
