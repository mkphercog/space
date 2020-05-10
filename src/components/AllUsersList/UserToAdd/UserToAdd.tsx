import React from "react";
import "./UserToAdd.scss";
import { addUserToFriends } from "./../../../store/actions/userAction";
import { setNotificationBar } from "../../../store/actions/notificationBarAction";

export const UserToAdd: React.FC<UserToAddProps> = ({
  globalUser,
  isInLoggedUserList,
  dispatch,
}) => (
  <div className="user-to-add__wrapper">
    <div
      className="user-to-add__image"
      style={{ backgroundImage: `url(${globalUser.img})` }}
    ></div>
    <p className="user-to-add__name">{globalUser.name}</p>
    {isInLoggedUserList ? (
      <i className="fas fa-check user-to-add__add-friend-icon user-to-add__add-friend-icon--added"></i>
    ) : (
      <i
        onClick={() => {
          dispatch(
            setNotificationBar(
              `Dodano ${globalUser.name} do znajomych.`,
              "green",
              true
            )
          );
          dispatch(addUserToFriends(globalUser.id));
        }}
        className="fas fa-user-plus user-to-add__add-friend-icon"
      ></i>
    )}
  </div>
);

interface UserToAddProps {
  globalUser: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
  };
  isInLoggedUserList: boolean;
  dispatch: Function;
}
