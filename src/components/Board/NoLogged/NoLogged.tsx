import React from "react";
import { NavLink } from "react-router-dom";
import "./NoLogged.scss";

export const NoLogged: React.FC = () => (
  <div className="no-logged">
    <h1 className="no-logged__title">Tylko dla zalogowanych użytkowników</h1>
    <NavLink className="no-logged__btn" to="/login">
      Zaloguj się
    </NavLink>
  </div>
);
