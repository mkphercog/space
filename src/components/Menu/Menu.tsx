import React, { useEffect } from "react";
import "./Menu.scss";
import { useSelector, useDispatch } from "react-redux";
import SpaceBG from "./../../images/space-bg.jpg";
import { NavLink } from "react-router-dom";
import { hideMenu } from "./../../store/actions/menuAction";

const SpaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export interface MenuProps {}

interface Menu {
  menu: {
    visibility: boolean;
  };
}

let menuLoad = false;

export const Menu: React.FC<MenuProps> = () => {
  const dispatch = useDispatch();
  const menuVisibility = useSelector((state: Menu) => state.menu.visibility);
  const animation = menuVisibility ? "menu--show" : "menu--hide";

  useEffect(() => {
    menuLoad = true;
  }, []);

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

        {/* <NavLink
          className="menu__link"
          to="/profile"
          onClick={() => dispatch(hideMenu())}
        >
          Profil
        </NavLink> */}

        <NavLink
          className="menu__link"
          to="/board"
          onClick={() => dispatch(hideMenu())}
        >
          Tablica
        </NavLink>

        {/* <NavLink
          className="menu__link"
          to="/friends"
          onClick={() => dispatch(hideMenu())}
        >
          Znajomi
        </NavLink> */}

        <NavLink
          className="menu__link"
          to="/login"
          onClick={() => dispatch(hideMenu())}
        >
          Logowanie
        </NavLink>
      </ul>
    </nav>
  );
};
