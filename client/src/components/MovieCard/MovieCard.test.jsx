import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { FavoriteMovieProvider } from "../../context/movieContext";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("MovieCard", () => {
  const mockedMovie = [
    {
      id: 1,
      title: "movie title",
      poster_img_url: "https://www.testimg.com",
    },
  ];

  const isFavorite = false;
  const toggleFavoriteMovie = () => {};
  it("renders the movie title and other details", () => {
    render(
      <FavoriteMovieProvider>
        <MemoryRouter>
          <MovieCard movies={mockedMovie} />
        </MemoryRouter>
      </FavoriteMovieProvider>
    );

    expect(document.body.textContent).toContain("movie title");
  });
});
