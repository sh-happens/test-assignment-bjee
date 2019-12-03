import React from "react";

import { NavLink } from "react-router-dom";

export const Header = props => {
  return (
    <header>
      {props.username ? (
        <div>Welcome</div>
      ) : (
        <NavLink to='/login'>Admin entrance</NavLink>
      )}
    </header>
  );
};
