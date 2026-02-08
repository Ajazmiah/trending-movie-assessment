import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data/trending.json");
const DATA_DIR = path.join(process.cwd(), "data");

export const getTrendingMovies = async (req, res) => {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const page = parseInt(req.query.page);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&page=${page}`;
  let cachedMovies;

  try {
    const savedMovies = fs.readFileSync(DATA_PATH, "utf-8");
    cachedMovies = JSON.parse(savedMovies);

    if (cachedMovies?.page === page && cachedMovies.results?.length > 0) {
      return res.json(cachedData);
    }
  } catch (err) {
    cachedMovies = null;
  }

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const moviesWithPosterImage = data.results.map((movie) => ({
      ...movie,
      poster_img_url: `${IMAGE_BASE_URL}${movie?.poster_path}`,
    }));

    const finalData = {
      ...data,
      results: moviesWithPosterImage,
    };

    // if cache not available - create data folder and write finalData to it
    try {
      fs.mkdirSync(DATA_DIR, { recursive: true });
      fs.writeFileSync(DATA_PATH, JSON.stringify(finalData), "utf-8");
      console.log("Trending movies cached to JSON file");
    } catch (writeErr) {
      console.error("Failed to write trending.json:", writeErr);
    }

    res.json(finalData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
