import { combineReducers } from "redux";

import { cardsReducer } from "./cards.reducer.js";
import { alert } from "./alert.reducer.js";
import { user } from "./user.reducer.js";

const rootReducer = combineReducers({
  cardsReducer,
  alert,
  user
});

export default rootReducer;
