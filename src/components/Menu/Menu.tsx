import React, { useState } from "react";
import "./Menu.scss";
import { useSelector, useDispatch } from "react-redux";
import SpaceBG from "./../../images/space-bg.jpg";
import { NavLink } from "react-router-dom";
import { hideMenu } from "./../../store/actions/menuAction";
import {
  setLoginUser,
  resetUserDetails,
} from "./../../store/actions/userAction";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const menuVisibility = useSelector((state: Menu) => state.menu.visibility);
  const userIsLogged = useSelector((state: User) => state.loggedUser.isLogged);
  const [menuLoad, setMenuLoad] = useState(false);
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

interface Menu {
  menu: {
    visibility: boolean;
  };
}

interface User {
  loggedUser: {
    isLogged: boolean;
  };
}
