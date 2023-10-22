export const SET_DRAWER = "SET_DRAWER";
export const GET_CATEGORY = "GET_CATEGORY";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_PRODUCTS_IS_LOADING = "SET_PRODUCTS_IS_LOADING";
export const SET_SEARCH_WORD = "SET_SEARCH_WORD";
export const SET_CART = "SET_CART";

export interface SetDrawerAction {
  type: typeof SET_DRAWER;
  payload?: any;
}
export interface SetCategoryAction {
  type: typeof SET_CATEGORY;
  payload?: any;
}

export interface SetProductsIsLoadingAction {
  type: typeof SET_PRODUCTS_IS_LOADING;
  payload?: any;
}

export interface GetCategoryAction {
  type: typeof GET_CATEGORY;
}

export interface SetSearchWordAction {
  type: typeof SET_SEARCH_WORD;
  payload?: String | null;
}

export interface SetCartAction {
  type: typeof SET_CART;
  payload?: any;
}

export type ActionTypes =
  | SetDrawerAction
  | SetCategoryAction
  | SetProductsIsLoadingAction
  | GetCategoryAction
  | SetSearchWordAction
  | SetCartAction;

export const setDrawer = (payload: {}): SetDrawerAction => ({
  type: SET_DRAWER,
  payload: payload,
});

export const getCategory = (): GetCategoryAction => ({
  type: GET_CATEGORY,
});

export const setCategory = (payload: {}): SetCategoryAction => ({
  type: SET_CATEGORY,
  payload: payload,
});

export const setProductsIsLoading =
  (payload: {}): SetProductsIsLoadingAction => ({
    type: SET_PRODUCTS_IS_LOADING,
    payload: payload,
  });

export const setSearchWord = (payload: String | null): SetSearchWordAction => ({
  type: SET_SEARCH_WORD,
  payload: payload,
});

export const setCart = (payload: {}): SetCartAction => ({
  type: SET_CART,
  payload: payload,
});
