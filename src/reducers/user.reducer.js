import { userConstants } from "../constants";

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.USER_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username
      };

    case userConstants.USER_LOGIN_FAILURE:
      return state;

    case userConstants.USER_LOGOUT:
      return {
        ...state,
        username: ""
      };

    default:
      return state;
  }
}
