import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { hideMenu } from "./../../store/actions/menuAction";
import {
  setLoginUser,
  resetUserDetails,
} from "./../../store/actions/userAction";
import { deleteNotifications } from "./../../store/actions/notificationBarAction";
import { GlobalStateTypes } from "./../../store/interfaces";

import SpaceBG from "./../../images/space-bg.jpg";
import "./Menu.scss";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const Menu: React.FC = () => {
  const [menuLoad, setMenuLoad] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state: GlobalStateTypes) => state);
  const { visibility: menuVisibility } = state.menu;
  const { isLogged: userIsLogged } = state.loggedUser;

  const animation = menuVisibility ? "menu--show" : "menu--hide";

  if (menuVisibility && !menuLoad) setMenuLoad(true);

  return (
    <nav className={`menu ${menuLoad ? animation : ""}`} style={spaceBgImage}>
      <ul className="menu__container">
        <NavLink
          className="menu__link"
          to="/"
          exact
          onClick={() => dispatch(hideMenu())}
        >
          O aplikacji
        </NavLink>

        {userIsLogged ? (
          <NavLink
            className="menu__link"
            to="/profile"
            onClick={() => dispatch(hideMenu())}
          >
            Profil
          </NavLink>
        ) : null}

        <NavLink
          className="menu__link"
          to="/board"
          onClick={() => dispatch(hideMenu())}
        >
          Tablica
        </NavLink>

        {userIsLogged ? (
          <NavLink
            className="menu__link"
            to="/users"
            onClick={() => dispatch(hideMenu())}
          >
            Użytkownicy
          </NavLink>
        ) : null}

        {userIsLogged ? (
          <NavLink
            className="menu__link"
            to="/login"
            onClick={() => {
              dispatch(hideMenu());
              dispatch(setLoginUser(false));
              dispatch(resetUserDetails());
              dispatch(deleteNotifications());
            }}
          >
            Wyloguj
          </NavLink>
        ) : (
          <NavLink
            className="menu__link"
            to="/login"
            onClick={() => dispatch(hideMenu())}
          >
            Logowanie
          </NavLink>
        )}

        {userIsLogged ? null : (
          <NavLink
            className="menu__link"
            to="/registration"
            onClick={() => dispatch(hideMenu())}
          >
            Rejestracja
          </NavLink>
        )}

        <p className="menu__author">
          Projekt i realizacja{" "}
          <a
            className="menu__author--link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mkphercog.github.io/mywebsite/"
          >
            Marcin Hercog
          </a>
        </p>
      </ul>
    </nav>
  );
};
