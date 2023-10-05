import { combineReducers } from "redux";
import movieReducer from "./reducers/movie-reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
});

export default rootReducer;
