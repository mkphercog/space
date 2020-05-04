import React from "react";
import "./LoggedUserProfile.scss";
import ACCOUNTS from "./../../accounts.json";

const { accounts } = ACCOUNTS;

export const LoggedUserProfile: React.FC<LoggedUserProfileProps> = ({
  loggedUser,
}) => {
  const getFriends = loggedUser.friends.map((friendID) =>
    accounts.find((user) => user.id === friendID)
  );
  const renderFriends = getFriends.map((friend) => (
    <div
      key={friend?.id}
      className="logged-user-profile__friend-img"
      style={{ backgroundImage: `url(${friend?.img})` }}
    >
      <span className="logged-user-profile__friend-name">{friend?.name}</span>
    </div>
  ));
  return (
    <section className="logged-user-profile">
      <div className="logged-user-profile__wrapper-name-img">
        <h1 className="logged-user-profile__name">{loggedUser.name}</h1>
        <div
          className="logged-user-profile__img"
          style={{
            backgroundImage: `url(${loggedUser.img ? loggedUser.img : null})`,
          }}
        ></div>
      </div>
      <div className="logged-user-profile__wrapper">
        <h2 className="logged-user-profile__friends-title">Znajomi</h2>
        <div className="logged-user-profile__friend-wrapper">
          {renderFriends.length ? (
            renderFriends
          ) : (
            <span className="logged-user-profile__friend-name">
              Brak znajomych
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export interface LoggedUserProfileProps {
  loggedUser: {
    name: string;
    img: string;
    friends: [];
  };
}