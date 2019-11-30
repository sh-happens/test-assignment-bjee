import { cardsConstants } from "../constants";
import { cardsService } from "../services";
import { alertActions } from "./";

export const cardsActions = { getCards, sortCards };

function getCards(pageNumber) {
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

function sortCards(sortField = "id", sortDirection = "asc", pageNumber = 0) {
  return dispatch => {
    dispatch(request(sortField, sortDirection));
    dispatch(
      alertActions.success(
        "Sorting cards " + sortField + " in " + sortDirection + " order"
      )
    );

    cardsService.sortCards(sortField, sortDirection).then(
      cards => {
        dispatch(success(cards, sortField, sortDirection));
        dispatch(
          alertActions.success(
            "Cards are successfully sorted " +
              sortField +
              " in " +
              sortDirection +
              " order"
          )
        );
      },
      error => {
        dispatch(failure(error, sortField, sortDirection));
        dispatch(
          alertActions.error(
            "Unsuccessful sorting " +
              sortField +
              " in " +
              sortDirection +
              " order"
          )
        );
      }
    );
  };

  function request(sortField, sortDirection) {
    return {
      type: cardsConstants.SORT_CARDS_REQUEST,
      sortField,
      sortDirection
    };
  }
  function success(cards, sortField, sortDirection) {
    return {
      type: cardsConstants.SORT_CARDS_SUCCESS,
      cards,
      sortField,
      sortDirection
    };
  }
  function failure(error, sortField, sortDirection) {
    return {
      type: cardsConstants.SORT_CARDS_FAILURE,
      error,
      sortField,
      sortDirection
    };
  }
}
