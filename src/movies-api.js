import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTJjZDljM2RjZDA5ZjQyZTFiM2I5ODEyOGU4OThmOSIsInN1YiI6IjY2NmM1ZTIyOTczMTA4ZDc5OTE2NTEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tHWvR0TaaQ2CUBcz8h2m8U0vHJZpB9834cJkDDbcVys";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;
axios.defaults.baseURL = "https://api.themoviedb.org/";

export default async function getMoviesList() {
  const response = await axios.get("/3/trending/movie/day?language=EN");
  return response.data;
}

export const searchMovies = async (query) => {
  const response = await axios.get(
    `/3/search/movie?query=${query}&include_adult=true&language=EN`
  );
  return response.data;
};

console.log(searchMovies("hello"));

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`/3/movie/${movieId}?language=EN`);
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`/3/movie/${movieId}/credits?language=EN`);
  return response.data;
};

export const getMoviesReviews = async (movieId) => {
  const response = await axios.get(`/3/movie/${movieId}/reviews?language=EN`);
  return response.data;
};