import React from "react";
import "./LoggedUserFriends.scss";
import { useDispatch } from "react-redux";
import { deleteUserFromFriends } from "./../../../store/actions/userAction";
import { setNotificationBar } from "../../../store/actions/notificationBarAction";

export const LoggedUserFriends: React.FC<LoggedUserFriendsProps> = ({
  loggedUser,
  allUsersList,
}) => {
  const dispatch = useDispatch();
  const getLoggedUserFriends = loggedUser.friends.map((friendID) =>
    allUsersList.find((user) => user.id === friendID)
  );

  const renderFriends = getLoggedUserFriends.map((friend) => (
    <div
      key={friend?.id}
      className="logged-user-friends__friend-img"
      style={{ backgroundImage: `url(${friend?.img})` }}
    >
      <span className="logged-user-friends__friend-name">{friend?.name}</span>
      <i
        onClick={() => {
          dispatch(deleteUserFromFriends(friend?.id));
          dispatch(
            setNotificationBar(`Usunięto ${friend?.name} ze znajomych.`, "red")
          );
        }}
        className="fas fa-user-minus logged-user-friends__delete-friend"
      ></i>
    </div>
  ));

  return (
    <div className="logged-user-friends">
      <h2 className="logged-user-friends__title">{`Znajomi (${getLoggedUserFriends.length})`}</h2>
      <div className="logged-user-friends__friend-wrapper">
        {renderFriends.length ? (
          <>
            {renderFriends}
            <div className="logged-user-friends__last-img-margin-on-mobile"></div>
          </>
        ) : (
          <span className="logged-user-friends__friend-name logged-user-friends__friend-name--no-friend">
            Brak znajomych
          </span>
        )}
      </div>
    </div>
  );
};

interface LoggedUserFriendsProps {
  loggedUser: {
    friends: [];
  };
  allUsersList: {
    id: number;
    name: string;
    img: string;
  }[];
}
