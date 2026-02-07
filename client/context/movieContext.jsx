import { createContext, useState, useContext, useEffect } from "react";

const favoriteMovieContext = createContext();

export const useMovieContext = () => useContext(favoriteMovieContext);

export const favoriteMovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const favoritedMovies = localStorage.getItem("favoriteMovies");
    return favoritedMovies ? JSON.parse(favoritedMovies) : [];
  });

  return (
    <favoriteMovieContext.Provider value>
      {children}
    </favoriteMovieContext.Provider>
  );
};
