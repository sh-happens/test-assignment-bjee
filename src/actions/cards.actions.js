import { cardsConstants } from "./../constants";
import { cardsService } from "./../services";
import { alertActions } from "./";
import { responseToText } from "./../helpers";

export const cardsActions = { getCards, createCard, patchCard };

function getCards(pageNumber, sortField, sortQueryDirection) {
  return dispatch => {
    dispatch(request(pageNumber));
    dispatch(alertActions.success("Cards' request for page # " + pageNumber));
    cardsService.getCards(pageNumber, sortField, sortQueryDirection).then(
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

function createCard(newCardData) {
  return dispatch => {
    dispatch(request());
    dispatch(alertActions.success("Creating new card..."));

    cardsService.createCard(newCardData).then(
      res => {
        const { id } = res.message;
        dispatch(success(res.message));
        dispatch(alertActions.success("Card with ID " + id + " was created"));
      },
      error => {
        dispatch(failure(error));
        dispatch(
          alertActions.error(
            "Card creation was unsuccessful. Server responce: " +
              responseToText(error)
          )
        );
      }
    );
  };

  function request() {
    return {
      type: cardsConstants.CREATE_CARD_REQUEST
    };
  }
  function success(newCard) {
    return {
      type: cardsConstants.CREATE_CARD_SUCCESS,
      newCard
    };
  }

  function failure(error) {
    return {
      type: cardsConstants.CREATE_CARD_FAILURE,
      error
    };
  }
}

function patchCard(id, newCardData) {
  return dispatch => {
    dispatch(request());

    cardsService.patchCard(id, newCardData).then(
      res => {
        dispatch(success());
        dispatch(alertActions.success("Card was successfully edited!"));
      },
      error => {
        dispatch(failure(error));
        dispatch(
          alertActions.success(
            "Card editing was unsuccessful! Server responce: " +
              responseToText(error)
          )
        );
      }
    );
  };

  function request() {
    return {
      type: cardsConstants.PATCH_CARD_REQUEST
    };
  }
  function success() {
    return {
      type: cardsConstants.PATCH_CARD_SUCCESS
    };
  }

  function failure(error) {
    return {
      type: cardsConstants.PATCH_CARD_FAILURE,
      error
    };
  }
}
