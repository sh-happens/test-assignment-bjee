import { userConstants } from "./../constants";
import { alertActions } from "./";

export const userActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    if (username === "admin" && password === "123") {
      dispatch(success(username));
      dispatch(alertActions.success("You have successfully loggd in!"));
    } else {
      dispatch(failure());
      dispatch(alertActions.error("Something's wrong!"));
    }
  };

  function success(username) {
    return { type: userConstants.USER_LOGIN_SUCCESS, username };
  }

  function failure() {
    return { type: userConstants.USER_LOGIN_FAILURE };
  }
}

function logout() {
  return dispatch => {
    dispatch(success());
  };

  function success() {
    return { type: userConstants.USER_LOGOUT };
  }
}
