import { statusReady, statusNotReady } from "./../constants";

export const getCardById = (cards, id) => {
  return cards.filter(card => card.id === id)[0];
};

export const boolToStatus = value => {
  if (value) {
    return statusReady;
  }

  return statusNotReady;
};

export const statusToBool = value => {
  if (value === statusReady) {
    return true;
  }

  return false;
};
