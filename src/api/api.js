import axios from 'axios';

// urls
const domain = process.env.REACT_APP_API_DOMAIN;
const api_key = process.env.REACT_APP_MOVIE_DB_API_KEY;
const POPULAR_MOVIES = `${domain}/movie/popular?api_key=${api_key}&language=en-US&include_adult=false`;
const SEARCH_MOVIE = `${domain}/search/movie?api_key=${api_key}&language=en-US&include_adult=false`;

const execute = (method, endpoint, data = {}, config = {}, headers = {}) => {
  const defaultHeaders = {};

  return axios({
    method,
    url: endpoint,
    data,
    config,
    headers: { ...defaultHeaders, ...headers }
  });
};

const get = (endpoint, extraHeaders = {}) =>
  execute('get', endpoint, undefined, undefined, extraHeaders);

export const getMovies = ({ page = 1 }) => {
  return get(`${POPULAR_MOVIES}&page=${page}`).then((data) => data.data);
};

export const searchMovie = ({ page = 1, query = '' }) => {
  return get(`${SEARCH_MOVIE}&page=${page}&query=${encodeURIComponent(query)}`).then(
    (data) => data.data
  );
};
