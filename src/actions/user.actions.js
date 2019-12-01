import { userConstants } from "./../constants";
// import { cardsService } from "./../services";
import { alertActions } from "./";
// import { history } from "./../helpers";

export const userActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    if (username === "admin" && password === "123") {
      dispatch(success(username));
      dispatch(alertActions.success("Вы успешно вошли в систему!"));
    } else {
      dispatch(failure());
      dispatch(alertActions.error("Проверьте введенные данные!"));
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
