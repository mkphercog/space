import React from "react";
import "./Users.scss";
import ACCOUNTS from "./../../accounts.json";

const { accounts } = ACCOUNTS;

export const Users: React.FC<UsersProps> = ({ loggedUser }) => {
  const listWithoutLoggedUser = accounts.filter(
    (user) => user.id !== loggedUser.id
  );

  const renderUsersList = listWithoutLoggedUser.map((user) => (
    <div key={user.id} className="users__wrapper">
      <div
        className="users__image"
        style={{ backgroundImage: `url(${user.img})` }}
      ></div>
      <p className="users__name">{user.name}</p>
      <i className="fas fa-user-plus users__add-friend-icon"></i>
    </div>
  ));

  return <section className="users">{renderUsersList}</section>;
};

export interface UsersProps {
  loggedUser: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: number[];
  };
}
