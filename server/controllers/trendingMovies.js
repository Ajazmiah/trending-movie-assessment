const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const getTrendingMovies = async (req, res) => {
  const page = parseInt(req.query.page)

  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${'dcb7abed74594f9a1b16be5f0a08f440'}&page=${page}`;
  try {
    const response = await fetch(URL);
    const movies = await response.json();

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
