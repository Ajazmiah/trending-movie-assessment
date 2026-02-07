import { createContext, useState, useContext, useEffect } from "react";

const favoriteMovieContext = createContext();

export const useMovieContext = () => useContext(favoriteMovieContext);

export const favoriteMovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const favoritedMovies = localStorage.getItem("favoriteMovies");
    return favoritedMovies ? JSON.parse(favoritedMovies) : [];
  });

  const toggleFavoriteMovie = (movie) => {
    const favoriteExists = favorites.find((fav) => fav.id === movie.id);

    if (favoriteExists) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((favMovie = favMovie.id === id));
  };

  return (
    <favoriteMovieContext.Provider
      value={{ favorites, toggleFavoriteMovie, isFavorite }}
    >
      {children}
    </favoriteMovieContext.Provider>
  );
};
