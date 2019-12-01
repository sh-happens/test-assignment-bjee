import { baseURL } from "../constants";
import { handleResponse } from "../helpers";

export const cardsService = {
  getCards
};

function getCards(pageNumber, sortField, sortDirection) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };
  const sortQuery = sortField ? "&sort_field=" + sortField : "";
  const sortQueryDirection = sortDirection
    ? "&sort_direction=" + sortDirection
    : "";
  const query =
    baseURL +
    "/?developer=Name&page=" +
    pageNumber +
    sortQuery +
    sortQueryDirection;

  return fetch(query, requestOptions).then(handleResponse);
}
