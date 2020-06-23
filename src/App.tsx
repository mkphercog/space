import React from "react";
import { useSelector } from "react-redux";
import { GlobalStateTypes } from "./store/interfaces";

import { SubpagesContent } from "./components/SubpagesContent/SubpagesContent";
import { ProfileShortcut } from "./components/ProfileShortcut/ProfileShortcut";
import { Notifications } from "./components/Notifications/Notifications";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";

import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => {
  const state = useSelector((state: GlobalStateTypes) => state);
  const { notificationList } = state.notificationBar;
  const { loggedUser } = state;

  return (
    <div className="app" style={spaceBgImage}>
      <MenuIcon />
      <Header />
      <SubpagesContent />
      <Menu />
      {loggedUser.isLogged ? (
        <>
          <Notifications notificationList={notificationList} />
          <ProfileShortcut loggedUser={loggedUser} />
        </>
      ) : null}
    </div>
  );
};
