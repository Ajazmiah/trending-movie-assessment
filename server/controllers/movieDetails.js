export const getMovieDetails = async (req, res) => {
  const movieId = parseInt(req.query.movieId);

  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`;

  try {
    const response = await fetch(URL);
    const movieDetails = await response.json();

    const moviesWithPosterImage = {
      ...movieDetails,
      poster_img_url: `${IMAGE_BASE_URL}/${movieDetails?.belongs_to_collection?.poster_path}`,
    };

    res.json(moviesWithPosterImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something is wrong with the server" });
  }
};
