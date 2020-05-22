import React from "react";
import "./GlobalUserLocalNav.scss";
import { NavLink } from "react-router-dom";
import {
  addUserToFriends,
  deleteUserFromFriends,
} from "./../../../store/actions/userAction";
import { setNotificationBar } from "./../../../store/actions/notificationBarAction";
import { NotificationColors } from "./../../../components/Notifications/NotificationBar/NotificationBar";

export const GlobalUserLocalNav: React.FC<GlobalUserLocalNavProps> = ({
  dispatch,
  globalUserDetails,
  isInFriendLoggedUser,
}) => (
  <nav className="global-user-local-nav">
    <NavLink
      className="global-user-local-nav__link"
      to={`/users/${globalUserDetails?.id}/info`}
    >
      Informacje
    </NavLink>
    <NavLink
      className="global-user-local-nav__link"
      to={`/users/${globalUserDetails?.id}/friends`}
    >
      {`Znajomi(${globalUserDetails?.friends.length})`}
    </NavLink>
    <div className="global-user-local-nav__is-friend">
      {isInFriendLoggedUser ? (
        <i
          onClick={() => {
            dispatch(deleteUserFromFriends(globalUserDetails?.id));
            dispatch(
              setNotificationBar(
                `Usunięto ${globalUserDetails?.name} ze znajomych.`,
                NotificationColors.red
              )
            );
          }}
          className="fas fa-user-minus global-user-local-nav__is-friend-icon global-user-local-nav__is-friend--delete"
        ></i>
      ) : (
        <i
          onClick={() => {
            dispatch(
              setNotificationBar(
                `Dodano ${globalUserDetails?.name} do znajomych.`,
                NotificationColors.green
              )
            );
            dispatch(addUserToFriends(globalUserDetails?.id));
          }}
          className="fas fa-user-plus global-user-local-nav__is-friend-icon global-user-local-nav__is-friend--add"
        ></i>
      )}
    </div>
  </nav>
);

interface GlobalUserLocalNavProps {
  dispatch: Function;
  globalUserDetails: {
    id: number;
    name: string;
    friends: Number[];
  };
  isInFriendLoggedUser: boolean;
}
