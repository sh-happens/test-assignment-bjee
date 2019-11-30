import { cardsConstants } from "../constants";
import { cardsService } from "../services";
import { alertActions } from "./";

export const cardsActions = { getCards };

function getCards(pageNumber) {
  console.log("CARDSACTIONS");
  return dispatch => {
    dispatch(request(pageNumber));
    dispatch(alertActions.success("Cards' request for page # " + pageNumber));
    cardsService.getCards(pageNumber).then(
      cards => {
        dispatch(success(cards, pageNumber));
        dispatch(
          alertActions.success(
            "Cards' request for page # " + pageNumber + " was successful"
          )
        );
      },
      error => {
        dispatch(failure(error, pageNumber));
        dispatch(
          alertActions.error(
            "Cards' request for page # " + pageNumber + " was unsuccessful"
          )
        );
      }
    );
  };

  function request(pageNumber) {
    return { type: cardsConstants.GET_CARDS_REQUEST, pageNumber };
  }
  function success(cards, pageNumber) {
    return { type: cardsConstants.GET_CARDS_SUCCESS, cards, pageNumber };
  }
  function failure(error, pageNumber) {
    return { type: cardsConstants.GET_CARDS_FAILURE, error, pageNumber };
  }
}
