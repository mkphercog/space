import React from "react";
import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";
import { Logo } from "./components/Logo/Logo";
import { Desk } from "./components/Desk/Desk";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Menu } from "./components/Menu/Menu";
import { useDispatch } from "react-redux";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="app" style={spaceBgImage}>
      <MenuIcon dispatch={dispatch} />
      <Logo />
      <Desk />
      <Menu dispatch={dispatch} />
    </div>
  );
};
