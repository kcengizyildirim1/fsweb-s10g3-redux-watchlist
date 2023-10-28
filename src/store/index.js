import { combineReducers } from "redux";
import movieReducer from "./reducer/reducerMovie";
import { reducerQueue } from "./reducer/reducerQueue";

export const reducers = combineReducers({
  movieReducer: movieReducer,
  queueReducer: reducerQueue,
});
