import React, { useEffect } from "react";
import "./Menu.scss";
import { useSelector } from "react-redux";
import SpaceBG from "./../../images/space-bg.jpg";
const SpaceBgImage = { backgroundImage: `url(${SpaceBG})` };
export interface MenuProps {}

interface Menu {
  menu: {
    visibility: boolean;
  };
}

let menuLoad = false;

export const Menu: React.FC<MenuProps> = () => {
  const menuVisibility = useSelector((state: Menu) => state.menu.visibility);
  const animation = menuVisibility ? "menu--show" : "menu--hide";

  useEffect(() => {
    menuLoad = true;
  }, []);

  return (
    <nav className={`menu ${menuLoad ? animation : ""}`} style={SpaceBgImage}>
      <ul className="menu__container">
        <li className="menu__link">O aplikacji</li>
        <li className="menu__link">Profil</li>
        <li className="menu__link">Tablica</li>
        <li className="menu__link">Znajomi</li>
        <li className="menu__link">Wyloguj</li>
      </ul>
    </nav>
  );
};
