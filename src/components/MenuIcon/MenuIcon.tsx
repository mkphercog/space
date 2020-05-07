import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideMenu, showMenu } from "./../../store/actions/menuAction";
import "./MenuIcon.scss";

export const MenuIcon: React.FC = () => {
  const menuVisibility = useSelector((state: Menu) => state.menu.visibility);
  const dispatch = useDispatch();

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
      className="menu-icon"
      onClick={() => {
        if (menuVisibility) dispatch(hideMenu());
        else dispatch(showMenu());
      }}
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

interface Menu {
  menu: {
    visibility: boolean;
  };
}
