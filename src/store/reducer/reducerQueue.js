import { movies } from "../../movies";
import {
  NEXT_QUEUE,
  PREVIUS_QUEUE,
  RETURN_FIRST_MOVIE,
} from "../action/actionQueue";

const initialState = {
  movies: movies,
  queue: 0,
};

export const reducerQueue = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_QUEUE:
      return {
        ...state,
        queue:
          state.queue < state.movies.length - 1 ? state.queue + 1 : state.queue,
      };

    case PREVIUS_QUEUE:
      return {
        ...state,
        queue: state.queue - 1,
      };

    case RETURN_FIRST_MOVIE:
      return {
        ...state,
        queue: initialState.queue,
      };

    default:
      return state;
  }
};
