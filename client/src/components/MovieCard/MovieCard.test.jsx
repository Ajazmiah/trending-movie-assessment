import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { FavoriteMovieProvider } from "../../context/movieContext";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";

describe("MovieCard", () => {
  const mockedMovie = [
    {
      id: 1,
      title: "movie title",
      poster_img_url: "https://www.testimg.com",
    },
  ];

  it("renders the movie title and ", () => {
    render(
      <FavoriteMovieProvider>
        <MemoryRouter>
          <MovieCard movies={mockedMovie} />
        </MemoryRouter>
      </FavoriteMovieProvider>
    );

    expect(screen.getByText("movie title")).toBeInTheDocument();
  });

  it("displays + when the movie is not favorited", () => {
    render(
      <FavoriteMovieProvider>
        <MemoryRouter>
          <MovieCard movies={mockedMovie} />
        </MemoryRouter>
      </FavoriteMovieProvider>
    );

    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it("displays - when the movie is favorited", async () => {
    render(
      <FavoriteMovieProvider>
        <MemoryRouter>
          <MovieCard movies={mockedMovie} />
        </MemoryRouter>
      </FavoriteMovieProvider>
    );

    const btn = screen.getByTestId("favorite-btn");
    await userEvent.click(btn);

    expect(screen.getByText("-")).toBeInTheDocument();
  });
});
