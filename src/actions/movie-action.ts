export const GET_MOVIE = "GET_MOVIE";
export const SET_MOVIE = "SET_MOVIE";
export const SELECTED_MOVIE = "SELECTED_MOVIE";

export interface GetMovieAction {
  type: typeof GET_MOVIE;
  payload?: any;
}

export interface SetMovieAction {
  type: typeof SET_MOVIE;
  payload?: any;
}

export interface SelectedMovieAction {
  type: typeof SELECTED_MOVIE;
  payload?: any;
}

export type ActionTypes = GetMovieAction | SetMovieAction | SelectedMovieAction;

export const getMovie = (): GetMovieAction => ({
  type: GET_MOVIE,
});

export const setMovie = (payload: {}): SetMovieAction => ({
  type: SET_MOVIE,
  payload: payload,
});

export const selectedMovie = (payload: {}): SelectedMovieAction => ({
  type: SELECTED_MOVIE,
  payload: payload,
});
