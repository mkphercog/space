import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu, showMenu } from "./../../store/actions/menuAction";
import "./MenuIcon.scss";

export interface MenuIconProps {}

interface Menu {
  menu: {
    visibility: boolean;
  };
}

export const MenuIcon: React.FC<MenuIconProps> = () => {
  const dispatch = useDispatch();
  const menuVisibility = useSelector((state: Menu) => state.menu.visibility);

  const topAnimation = menuVisibility
    ? "menu-icon__bar--top-animation"
    : "menu-icon__bar--top-animationBack";
  const centerAnimation = menuVisibility
    ? "menu-icon__bar--center-animation"
    : "";
  const bottomAnimation = menuVisibility
    ? "menu-icon__bar--bottom-animation"
    : "menu-icon__bar--bottom-animationBack";

  return (
    <div
      onClick={() => {
        if (menuVisibility) dispatch(hideMenu());
        else dispatch(showMenu());
      }}
      className="menu-icon"
    >
      <span
        className={`menu-icon__bar menu-icon__bar--top ${topAnimation}`}
      ></span>
      <span
        className={`menu-icon__bar menu-icon__bar--center ${centerAnimation}`}
      ></span>
      <span
        className={`menu-icon__bar menu-icon__bar--bottom ${bottomAnimation}`}
      ></span>
    </div>
  );
};
