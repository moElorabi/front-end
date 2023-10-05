export interface InitialState {
  movie: {
    title: string | null;
    date: string | null;
    poster: string | null;
    loading: boolean | null;
  };
}

export const initialState: InitialState = {
  movie: {
    title: null,
    date: null,
    poster: null,
    loading: false,
  },
};
