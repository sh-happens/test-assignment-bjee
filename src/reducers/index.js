import { combineReducers } from "redux";

import { cardsReducer } from "./cards.reducer.js";
import { alert } from "./alert.reducer.js";

const rootReducer = combineReducers({
  cardsReducer,
  alert
});

export default rootReducer;
