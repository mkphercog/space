import React from "react";
import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";
import { Logo } from "./components/Logo/Logo";
import { SubpagesContent } from "./components/SubpagesContent/SubpagesContent";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Menu } from "./components/Menu/Menu";
import { NotificationBar } from "./components/NotificationBar/NotificationBar";
import { useSelector } from "react-redux";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => {
  const notificationBar = useSelector(
    (state: Notification) => state.notificationBar
  );
  const { message, colorBar, animation } = notificationBar;

  return (
    <div className="app" style={spaceBgImage}>
      <MenuIcon />
      <Logo />
      <SubpagesContent />
      <Menu />
      <NotificationBar
        message={message}
        colorBar={colorBar}
        animation={animation}
      />
    </div>
  );
};

interface Notification {
  notificationBar: {
    message: string;
    colorBar: string;
    animation: boolean;
  };
}
