import React from "react";
import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";
import { Logo } from "./components/Logo/Logo";
import { SubpagesContent } from "./components/SubpagesContent/SubpagesContent";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Menu } from "./components/Menu/Menu";
import { useSelector } from "react-redux";
import { Notifications } from "./components/Notifications/Notifications";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => {
  const notificationList = useSelector(
    (state: Notification) => state.notificationBar.notificationList
  );

  return (
    <div className="app" style={spaceBgImage}>
      <MenuIcon />
      <Logo />
      <SubpagesContent />
      <Menu />
      <Notifications notificationList={notificationList} />
    </div>
  );
};

interface Notification {
  notificationBar: {
    notificationList: {
      messageText: string;
      colorBar: string;
      animation: boolean;
    }[];
  };
}
