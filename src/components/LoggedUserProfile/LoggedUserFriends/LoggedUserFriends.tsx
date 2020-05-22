import React from "react";
import "./LoggedUserFriends.scss";
import { useHistory } from "react-router-dom";

export const LoggedUserFriends: React.FC<LoggedUserFriendsProps> = ({
  loggedUser,
  allUsersList,
}) => {
  const history = useHistory();
  const getLoggedUserFriends = loggedUser.friends.map((friendID) =>
    allUsersList.find((user) => user.id === friendID)
  );

  const renderFriends = getLoggedUserFriends.map((friend) => (
    <div
      key={friend?.id}
      className="logged-user-friends__friend-img"
      style={{ backgroundImage: `url(${friend?.img})` }}
      onClick={() => history.push(`/users/${friend?.id}/info`)}
    >
      <span className="logged-user-friends__friend-name">{friend?.name}</span>
    </div>
  ));

  return (
    <div className="logged-user-friends">
      <div className="logged-user-friends__friend-wrapper">
        {renderFriends.length ? (
          renderFriends
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
    friends: number[];
  };
  allUsersList: {
    id: number;
    name: string;
    img: string;
  }[];
}
