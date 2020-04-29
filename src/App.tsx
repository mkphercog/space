import React from "react";
import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";
import { Logo } from "./components/Logo/Logo";
import { Desk } from "./components/Desk/Desk";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Menu } from "./components/Menu/Menu";

const SpaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => (
  <div className="App" style={SpaceBgImage}>
    <MenuIcon />
    <Logo />
    <Desk />
    <Menu />
  </div>
);
