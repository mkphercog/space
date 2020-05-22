import React from "react";
import "./GlobalUserFriends.scss";

export const GlobalUserFriends: React.FC<GlobalUserFriendsProps> = ({
  history,
  friendsList,
  allUsersList,
}) => {
  const getFriends = friendsList.map((friendID) =>
    allUsersList.find((user) => user.id === friendID)
  );

  const renderFriends = getFriends.map((friend) => (
    <div
      key={friend?.id}
      className="global-user-friends__friend-img"
      style={{ backgroundImage: `url(${friend?.img})` }}
      onClick={() => history.push(`/users/${friend?.id}/info`)}
    >
      <span className="global-user-friends__friend-name">{friend?.name}</span>
    </div>
  ));

  return (
    <div className="global-user-friends">
      <div className="global-user-friends__friend-wrapper">
        {renderFriends.length ? (
          renderFriends
        ) : (
          <span className="global-user-friends__friend-name global-user-friends__friend-name--no-friend">
            Brak znajomych
          </span>
        )}
      </div>
    </div>
  );
};

interface GlobalUserFriendsProps {
  history: {
    push: Function;
  };
  friendsList: number[];
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: number[];
  }[];
}
