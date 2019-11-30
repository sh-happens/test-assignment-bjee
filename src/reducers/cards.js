import { cardsConstants } from "../constants";

export function cardsReducer(state = {}, action) {
  switch (action.type) {
    case cardsConstants.GET_CARDS_REQUEST:
      return {
        ...state
      };
    case cardsConstants.GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.cards.message.tasks,
        pageNumber: action.pageNumber
      };
    case cardsConstants.GET_CARDS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
