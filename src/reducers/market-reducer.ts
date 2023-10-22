import {
  ActionTypes,
  GET_CATEGORY,
  SET_CART,
  SET_CATEGORY,
  SET_DRAWER,
  SET_PRODUCTS_IS_LOADING,
  SET_SEARCH_WORD,
} from "../actions/market-action";
import { initialState } from "../initial-state";

const marketReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_PRODUCTS_IS_LOADING:
      return { ...state, productsIsLoading: action.payload };
    case SET_DRAWER:
      return { ...state, drawerIsOpen: action.payload };
    case GET_CATEGORY:
      return { ...state, categoryIsLoading: true };
    case SET_CATEGORY:
      return { ...state, category: action.payload, categoryIsLoading: false };
    case SET_SEARCH_WORD:
      return { ...state, searchWord: action.payload };
    case SET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default marketReducer;
