import { baseURL } from "./../constants";
import { handleResponse } from "./../helpers";

export const cardsService = {
  getCards
};

function getCards(pageNumber) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  const query = baseURL + "/?developer=Name&page=" + pageNumber;

  return fetch(query, requestOptions).then(handleResponse);
}
