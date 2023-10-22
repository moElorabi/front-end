import { InitialState } from "./types/interfaces";

export const initialState: InitialState = {
  drawer: { drawerIsOpen: false },
  category: "All",
  productsIsLoading: false,
  categoryIsLoading: false,
  searchWord: null,
  cart: [],
};
