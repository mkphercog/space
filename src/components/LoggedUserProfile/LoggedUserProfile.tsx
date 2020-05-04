import React from "react";
import "./LoggedUserProfile.scss";

export const LoggedUserProfile: React.FC<LoggedUserProfileProps> = ({
  loggedUser,
}) => (
  <section className="logged-user-profile">
    <div
      className="logged-user-profile__img"
      style={{
        backgroundImage: `url(${loggedUser.img ? loggedUser.img : null})`,
      }}
    ></div>
    <h1 className="logged-user-profile__name">{loggedUser.name}</h1>
  </section>
);

export interface LoggedUserProfileProps {
  loggedUser: {
    name: string;
    img: string;
  };
}
