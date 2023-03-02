const fetchMovieApi = async (pathname, qeury = "") => {
  const API_URL = "https://api.themoviedb.org/3";
  try {
    const res = await fetch(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}&${qeury}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};
const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list", `page=1`);
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated", `page=1`);
};
const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular", `page=1`);
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

export {
  getMovie,
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
};
