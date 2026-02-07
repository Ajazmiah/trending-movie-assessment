export const getMovieDetails = async (req, res) => {
  const movieId = parseInt(req.query.movieId) || 1368166;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`;
  try {
    const response = await fetch(URL);
    const movieDetails = await response.json();
    res.json(movieDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
