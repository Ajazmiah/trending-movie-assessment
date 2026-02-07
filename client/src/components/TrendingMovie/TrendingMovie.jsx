import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

function TrendingMovie() {
  const [page, setPage] = useState(1);
  const url = `http://localhost:5000/api/movie/trending?page=${page}`;

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const data = {
    page: 1,
    total_pages: 500,
    total_results: 10000,
    results: [
      {
        id: 1368166,
        title: "The Housemaid",
        overview:
          "Trying to escape her past, Millie Calloway accepts a job as a live-in housemaid for the wealthy Nina and Andrew Winchester. But what begins as a dream job quickly unravels into something far more dangerous—a sexy, seductive game of secrets, scandal, and power.",
        release_date: "2025-12-18",
        vote_average: 7.134,
        vote_count: 805,
        poster_path: "/cWsBscZzwu5brg9YjNkGewRUvJX.jpg",
        poster_img_url: `${IMAGE_BASE_URL}/cWsBscZzwu5brg9YjNkGewRUvJX.jpg`,
      },
      {
        id: 858024,
        title: "Hamnet",
        overview:
          "The powerful story of love and loss that inspired the creation of Shakespeare's timeless masterpiece, Hamlet.",
        release_date: "2025-11-26",
        vote_average: 7.7,
        vote_count: 295,
        poster_path: "/vbeyOZm2bvBXcbgPD3v6o94epPX.jpg",
        poster_img_url: `${IMAGE_BASE_URL}/vbeyOZm2bvBXcbgPD3v6o94epPX.jpg`,
      },
      {
        id: 1084242,
        title: "Zootopia 2",
        overview:
          "After cracking the biggest case in Zootopia's history, rookie cops Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery when Gary De'Snake arrives and turns the animal metropolis upside down.",
        release_date: "2025-11-26",
        vote_average: 7.629,
        vote_count: 1551,
        poster_path: "/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg",
        poster_img_url: `${IMAGE_BASE_URL}/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg`,
      },
      {
        id: 1168190,
        title: "The Wrecking Crew",
        overview:
          "Estranged half-brothers Jonny and James reunite after their father's mysterious death. As they search for the truth, buried secrets reveal a conspiracy threatening to tear their family apart.",
        release_date: "2026-01-28",
        vote_average: 6.825,
        vote_count: 408,
        poster_path: "/gbVwHl4YPSq6BcC92TQpe7qUTh6.jpg",
        poster_img_url: `${IMAGE_BASE_URL}/gbVwHl4YPSq6BcC92TQpe7qUTh6.jpg`,
      },
      {
        id: 1234731,
        title: "Anaconda",
        overview:
          "A group of friends facing mid-life crises head to the rainforest with the intention of remaking their favorite movie from their youth, only to find themselves in a fight for their lives against natural disasters, giant snakes and violent criminals.",
        release_date: "2025-12-24",
        vote_average: 5.843,
        vote_count: 468,
        poster_path: "/qxMv3HwAB3XPuwNLMhVRg795Ktp.jpg",
        poster_img_url: `${IMAGE_BASE_URL}/qxMv3HwAB3XPuwNLMhVRg795Ktp.jpg`,
      },
    ],
  };
  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieCard movies={data.results} />
    </div>
  );
}

export default TrendingMovie;
