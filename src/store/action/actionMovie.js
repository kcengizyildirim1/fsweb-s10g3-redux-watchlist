export const ADD_MOVIE_LIST = "ADD_MOVIE_LIST";
export const REMOVE_MOVIE_LIST = "REMOVE_MOVIE_LIST";

export const addMovieList = (movie) => ({
  type: ADD_MOVIE_LIST,
  payload: movie,
});

export const removeMovieList = (id) => ({
  type: REMOVE_MOVIE_LIST,
  payload: id,
});
