// import axios from 'axios';

const BASEURL = 'https://api.themoviedb.org';
const KEY = 'a07c11403afd75e3efa98b4898aec563';

const fetchShowMoviesDetails = movieId => {
  return fetch(`${BASEURL}/3/movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then(response => response.json());
};

const fetchMovieWithQuery = searchQuery => {
  return fetch(`${BASEURL}/3/search/movie?api_key=${KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`)
    .then(response => response.json())
}

const fetchtTrendingMovie = () => {
  return fetch(`${BASEURL}/3/trending/movie/day?api_key=${KEY}`)
  .then(response => response.json())
}

const fetchtCastMovie = (movieId) => {
  return fetch(`${BASEURL}/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
  .then(response => response.json())
}

const fetchtReviewsMovie = (movieId) => {
  return fetch(`${BASEURL}/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
  .then(response => response.json())
}

export default {
  fetchShowMoviesDetails,
  fetchMovieWithQuery,
  fetchtTrendingMovie,
  fetchtCastMovie,
  fetchtReviewsMovie
};
