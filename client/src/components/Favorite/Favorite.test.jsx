import React from "react";
import { render, screen } from "@testing-library/react";
import Favorite from "./Favorite";
import { createContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";

// Create a mock context
const FavoriteMovieContext = createContext();

vi.mock("../../context/movieContext", () => ({
  useMovieContext: () => React.useContext(FavoriteMovieContext),
}));

describe("Favorite Component", () => {
  const mockedMovie = [
    {
      id: 1,
      title: "movie title",
      poster_img_url: "https://www.testimg.com",
    },
  ];

  const isFavorite = () => {};
  test("renders 'No Favorite Movies' when favorites is empty", () => {
    render(
      <FavoriteMovieContext.Provider value={{ favorites: [] }}>
        <MemoryRouter>
          <Favorite />
        </MemoryRouter>
      </FavoriteMovieContext.Provider>
    );

    expect(screen.getByText("No Favorite Movies")).toBeInTheDocument();
  });

  test("renders favorite movies when favorites has atleast one favorite", () => {
    render(
      <FavoriteMovieContext.Provider
        value={{ favorites: mockedMovie, isFavorite }}
      >
        <MemoryRouter>
          <Favorite />
        </MemoryRouter>
      </FavoriteMovieContext.Provider>
    );

    expect(screen.getByText("movie title")).toBeInTheDocument();
  });
});
