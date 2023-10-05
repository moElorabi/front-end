import { combineReducers } from "redux";
import counterReducer from "./reducers/first-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
