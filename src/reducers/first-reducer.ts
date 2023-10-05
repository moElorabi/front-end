import { ActionTypes, INCREMENT, DECREMENT } from "../actions/first-action";
import { CounterState, initialState } from "../initial-state";

const counterReducer = (
  state = initialState,
  action: ActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
