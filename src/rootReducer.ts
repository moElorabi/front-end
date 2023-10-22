import { combineReducers } from "redux";
import marketReducer from "./reducers/market-reducer";

const rootReducer = combineReducers({
  market: marketReducer,
});

export default rootReducer;
