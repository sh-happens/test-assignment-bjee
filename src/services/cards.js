import { baseURL } from "./../constants";
import { handleResponse } from "./../helpers";

export const cardsService = {
  getCards,
  sortCards
};

function getCards(pageNumber) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  const query = baseURL + "/?developer=Name&page=" + pageNumber;

  return fetch(query, requestOptions).then(handleResponse);
}

function sortCards(sortField = "id", sortDirection = "asc", pageNumber = 0) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  const query =
    baseURL +
    "/?developer=Name&page=" +
    pageNumber +
    "&sort_field=" +
    sortField +
    "&sort_direction=" +
    sortDirection;

  return fetch(query, requestOptions).then(handleResponse);
}
