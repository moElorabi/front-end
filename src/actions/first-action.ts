export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface IncrementAction {
  type: typeof INCREMENT;
  payload?: any;
}

export interface DecrementAction {
  type: typeof DECREMENT;
  payload?: any;
}

export type ActionTypes = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({
  type: INCREMENT,
  //   payload: {},
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
  //   payload: {},
});
