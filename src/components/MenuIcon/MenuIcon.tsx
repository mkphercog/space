import React, { useState } from "react";
import "./MenuIcon.scss";

export interface MenuIconProps {}

export const MenuIcon: React.FC<MenuIconProps> = () => {
  const [isClickedMenuIcon, setIsClickedMenuIcon] = useState(false);
  const topAnimation = isClickedMenuIcon
    ? "menu-icon__bar--top-animation"
    : "menu-icon__bar--top-animationBack";
  const centerAnimation = isClickedMenuIcon
    ? "menu-icon__bar--center-animation"
    : "";
  const bottomAnimation = isClickedMenuIcon
    ? "menu-icon__bar--bottom-animation"
    : "menu-icon__bar--bottom-animationBack";

  return (
    <div
      onClick={() => setIsClickedMenuIcon(!isClickedMenuIcon)}
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
