import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data/moviesDetails.json");
const DATA_DIR = path.join(process.cwd(), 'data')


export const getMovieDetails = async (req, res) => {
  const movieId = parseInt(req.query.movieId);

  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  let cachedMovies = [];

  try {
    const file = fs.readFileSync(DATA_PATH, "utf-8");
    cachedMovies = JSON.parse(file);

    const existingMovie = cachedMovies.find((movie) => movie.id === movieId);

    if (existingMovie) {
      return res.json(existingMovie);
    }
  } catch (err) {
    cachedMovies = [];
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`
    );

    const movieDetails = await response.json();

    const moviesWithPosterImage = {
      ...movieDetails,
      poster_img_url: `${IMAGE_BASE_URL}/${movieDetails?.poster_path}`,
    };

    cachedMovies.push(moviesWithPosterImage);

    try {
      fs.mkdirSync(DATA_DIR, { recursive: true });
      fs.writeFileSync(
        DATA_PATH,
        JSON.stringify(cachedMovies),
        "utf-8"
      );
    } catch (writeErr) {
      console.error("Failed to write movies.json:", writeErr);
    }

    res.json(moviesWithPosterImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
