import React from "react";
import "./LoggedUserProfile.scss";
import { LoggedUserFriends } from "./LoggedUserFriends/LoggedUserFriends";

export const LoggedUserProfile: React.FC<LoggedUserProfileProps> = ({
  loggedUser,
  allUsersList,
}) => (
  <section className="logged-user-profile">
    <div className="logged-user-profile__wrapper-name-img">
      <div
        className="logged-user-profile__img"
        style={{
          backgroundImage: `url(${loggedUser.img})`,
        }}
      ></div>
      <h1 className="logged-user-profile__name">{loggedUser.name}</h1>
    </div>
    <LoggedUserFriends loggedUser={loggedUser} allUsersList={allUsersList} />
  </section>
);

interface LoggedUserProfileProps {
  loggedUser: {
    name: string;
    img: string;
    friends: [];
  };
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
