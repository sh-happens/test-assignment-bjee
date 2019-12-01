import { cardsConstants } from "../constants";

const initialState = {
  cards: [
    {
      id: 1,
      username: "Test User",
      email: "test_user_1@example.com",
      text: "Hello, world!",
      status: 10
    },
    {
      id: 3,
      username: "Test User 2",
      email: "test_user_2@example.com",
      text: "Hello from user 2!",
      status: 0
    },
    {
      id: 4,
      username: "Test User 3",
      email: "test_user_3@example.com",
      text: "Hello from user 3!",
      status: 0
    }
  ],
  pageNumber: 1,
  totalTaskCount: 3
};

export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case cardsConstants.GET_CARDS_REQUEST:
      return state;

    case cardsConstants.GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.cards.message.tasks,
        pageNumber: action.pageNumber,
        totalTaskCount: action.cards.message.total_task_count
      };

    default:
      return state;
  }
}
