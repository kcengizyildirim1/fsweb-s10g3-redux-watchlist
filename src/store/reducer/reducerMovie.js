import { ADD_MOVIE_LIST, REMOVE_MOVIE_LIST } from "../action/actionMovie";

const initalState = {
  movie: [],
};

const movieReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_MOVIE_LIST:
      if (state.movie.find((movie) => movie.id === action.payload.id))
        return state;
      return {
        ...state,
        movie: [...state.movie, action.payload],
      };

    case REMOVE_MOVIE_LIST:
      return {
        ...state,
        movie: state.movie.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

export default movieReducer;
