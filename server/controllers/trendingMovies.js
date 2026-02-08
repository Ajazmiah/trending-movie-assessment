

export const getTrendingMovies = async (req, res) => {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const page = parseInt(req.query.page);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&page=${page}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();

    const moviesWithPosterImage = data.results.map((movie) => ({
      ...movie,
      poster_img_url: `${IMAGE_BASE_URL}/${movie?.poster_path}`,
    }));

    res.json({
      ...data,
      results: moviesWithPosterImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
