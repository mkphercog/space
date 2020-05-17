import React from "react";
import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { SubpagesContent } from "./components/SubpagesContent/SubpagesContent";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Menu } from "./components/Menu/Menu";
import { useSelector } from "react-redux";
import { Notifications } from "./components/Notifications/Notifications";
import { ProfileShortcut } from "./components/ProfileShortcut/ProfileShortcut";

const spaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => {
  const notificationList = useSelector(
    (state: Notification) => state.notificationBar.notificationList
  );
  const loggedUser = useSelector((state: LoggedUser) => state.loggedUser);

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

interface Notification {
  notificationBar: {
    notificationList: {
      messageText: string;
      colorBar: string;
      animation: boolean;
    }[];
  };
}

interface LoggedUser {
  loggedUser: {
    isLogged: boolean;
    img: string;
    name: string;
  };
}
