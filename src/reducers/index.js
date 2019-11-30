import { combineReducers } from "redux";

import { cardsReducer } from "./cards.js";

const rootReducer = combineReducers({
  cardsReducer,
  alert
});

export default rootReducer;
