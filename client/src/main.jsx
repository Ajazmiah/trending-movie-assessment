import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Favorite from "./components/Favorite/Favorite";
import FavoriteMovieProvider from "./context/movieContext";
import TrendingMovie from "./components/TrendingMovie/TrendingMovie";
import MovieDetails from "./components/MovieDetails/MovieDetails";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoriteMovieProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/movie/:movieId" element={<MovieDetails/>} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/trending" element={<TrendingMovie/>} />
          </Route>
        </Routes>
      </FavoriteMovieProvider>
    </BrowserRouter>
  </StrictMode>
);
