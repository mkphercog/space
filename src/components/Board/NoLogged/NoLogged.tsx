import React from "react";
import "./NoLogged.scss";
import { NavLink } from "react-router-dom";

export const NoLogged: React.FC = () => (
  <div className="no-logged">
    <h1 className="no-logged__title">Tylko dla zalogowanych użytkowników</h1>
    <NavLink className="no-logged__btn" to="/login">
      Zaloguj się
    </NavLink>
  </div>
);
