export const GET_MOVIE = "GET_MOVIE";
export const SET_MOVIE = "SET_MOVIE";

export interface GetMovieAction {
  type: typeof GET_MOVIE;
  payload?: any;
}

export interface SetMovieAction {
  type: typeof SET_MOVIE;
  payload?: any;
}

export type ActionTypes = GetMovieAction | SetMovieAction;

export const getMovie = (): GetMovieAction => ({
  type: GET_MOVIE,
});

export const setMovie = (payload: {}): SetMovieAction => ({
  type: SET_MOVIE,
  payload: payload,
});
