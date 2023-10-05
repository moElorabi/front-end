import {
  ActionTypes,
  GET_MOVIE,
  SET_MOVIE,
  SELECTED_MOVIE,
} from "../actions/movie-action";
import { initialState } from "../initial-state";

const movieReducer = (state = initialState.movie, action: ActionTypes) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, loading: true };
    case SET_MOVIE:
      return {
        ...state,
        allData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
