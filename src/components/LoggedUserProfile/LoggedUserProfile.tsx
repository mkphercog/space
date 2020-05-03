import React from "react";
import "./LoggedUserProfile.scss";
import { useSelector } from "react-redux";

export interface LoggedUserProfileProps {}

interface User {
  user: {
    name: string;
    img: string;
  };
}

const LoggedUserProfile: React.FC<LoggedUserProfileProps> = () => {
  const user = useSelector((state: User) => state.user);

  return (
    <section className="logged-user-profile">
      <div
        className="logged-user-profile__img"
        style={{ backgroundImage: `url(${user.img ? user.img : null})` }}
      ></div>
      <h1 className="logged-user-profile__name">{user.name}</h1>
    </section>
  );
};

export default LoggedUserProfile;
