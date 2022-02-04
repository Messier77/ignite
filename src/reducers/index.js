import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  gamesReducer: gamesReducer,
});

export default rootReducer;
