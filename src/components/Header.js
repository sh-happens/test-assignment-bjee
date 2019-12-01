import React from "react";

import { NavLink } from "react-router-dom";

export const Header = props => {
  return (
    <header>
      {props.username ? (
        <div>Добро пожаловать, господин админ!</div>
      ) : (
        <NavLink to='/login'>Войти как админ</NavLink>
      )}
    </header>
  );
};
