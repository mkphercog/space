import React, { useState } from "react";
import "./Menu.scss";
import { useSelector } from "react-redux";
import SpaceBG from "./../../images/space-bg.jpg";
import { NavLink } from "react-router-dom";
import { hideMenu } from "./../../store/actions/menuAction";
import { setLoginUser, setUserDetails } from "./../../store/actions/userAction";

const SpaceBgImage = { backgroundImage: `url(${SpaceBG})` };

const defaultUserState = {
  id: 0,
  name: "Nieznajomy",
  img: "",
  friends: [],
};

export const Menu: React.FC<MenuProps> = ({ dispatch }) => {
  const menuVisibility = useSelector((state: Menu) => state.menu.visibility);
  const userIsLogged = useSelector((state: User) => state.user.isLogged);
  const [menuLoad, setMenuLoad] = useState(false);
  const animation = menuVisibility ? "menu--show" : "menu--hide";

  if (menuVisibility && !menuLoad) setMenuLoad(true);

  return (
    <nav className={`menu ${menuLoad ? animation : ""}`} style={SpaceBgImage}>
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
              dispatch(setUserDetails(defaultUserState));
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
      </ul>
    </nav>
  );
};

export interface MenuProps {
  dispatch: Function;
}

interface Menu {
  menu: {
    visibility: boolean;
  };
}

interface User {
  user: {
    isLogged: boolean;
  };
}
