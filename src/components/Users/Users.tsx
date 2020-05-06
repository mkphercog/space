import React from "react";
import "./Users.scss";
import { useDispatch } from "react-redux";
import { addUserToFriends } from "./../../store/actions/userAction";

export const Users: React.FC<UsersProps> = ({ loggedUser, users }) => {
  const dispatch = useDispatch();

  const getListWithoutLoggedUser = users.filter(
    (user) => user.id !== loggedUser.id
  );

  const renderUsersList = getListWithoutLoggedUser.map((user) => {
    const isInLoggedUserList = loggedUser.friends.includes(user.id);
    return (
      <div key={user.id} className="users__wrapper">
        <div
          className="users__image"
          style={{ backgroundImage: `url(${user.img})` }}
        ></div>
        <p className="users__name">{user.name}</p>
        {isInLoggedUserList ? (
          <i className="fas fa-check users__add-friend-icon users__add-friend-icon--added"></i>
        ) : (
          <i
            onClick={() => dispatch(addUserToFriends(user.id))}
            className="fas fa-user-plus users__add-friend-icon"
          ></i>
        )}
      </div>
    );
  });

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
  users: {
    login: string;
    password: string;
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
