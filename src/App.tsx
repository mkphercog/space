import React from "react";
import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";
import { Logo } from "./components/Logo/Logo";
import { SubpagesContent } from "./components/SubpagesContent/SubpagesContent";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Menu } from "./components/Menu/Menu";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => {
  return (
    <div className="app" style={spaceBgImage}>
      <MenuIcon />
      <Logo />
      <SubpagesContent />
      <Menu />
    </div>
  );
};
