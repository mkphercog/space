import React from "react";
import "./UserToAdd.scss";
import {
  addUserToFriends,
  deleteUserFromFriends,
} from "./../../../store/actions/userAction";
import { setNotificationBar } from "../../../store/actions/notificationBarAction";
import { useHistory } from "react-router-dom";

export const UserToAdd: React.FC<UserToAddProps> = ({
  globalUser,
  isInLoggedUserList,
  dispatch,
}) => {
  const history = useHistory();
  return (
    <div className="user-to-add__wrapper">
      <div
        className="user-to-add__image"
        style={{ backgroundImage: `url(${globalUser.img})` }}
        onClick={() => history.push(`users/${globalUser.id}`)}
      ></div>
      <p className="user-to-add__name">{globalUser.name}</p>
      {isInLoggedUserList ? (
        <i
          onClick={() => {
            dispatch(deleteUserFromFriends(globalUser?.id));
            dispatch(
              setNotificationBar(
                `Usunięto ${globalUser?.name} ze znajomych.`,
                "red"
              )
            );
          }}
          className="fas fa-user-minus user-to-add__icon user-to-add__icon--delete"
        ></i>
      ) : (
        <i
          onClick={() => {
            dispatch(
              setNotificationBar(
                `Dodano ${globalUser.name} do znajomych.`,
                "green"
              )
            );
            dispatch(addUserToFriends(globalUser.id));
          }}
          className="fas fa-user-plus user-to-add__icon user-to-add__icon--add"
        ></i>
      )}
    </div>
  );
};

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
