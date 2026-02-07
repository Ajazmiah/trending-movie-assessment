

const TMDB_API_KEY =  'dcb7abed74594f9a1b16be5f0a08f440'//process.env.TMDB_API_KEY;

const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}&page=${1}`;

export const getTrendingMovies = async (req, res) => {
  const page = req.query.page | 1;
  try {
    const response = await fetch(`${URL}?api_key=${TMDB_API_KEY}&page=${1}`);
    const movies = await response.json();

    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
