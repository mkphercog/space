import React from "react";
import "./GlobalUserFriends.scss";

export const GlobalUserFriends: React.FC<GlobalUserFriendsProps> = ({
  history,
  friendsList,
  allUsersList,
}) => {
  const getFriends = allUsersList.filter((friend) =>
    friendsList.includes(friend.id)
  );

  const renderFriends = getFriends.map((friend) => (
    <div
      key={friend?.id}
      className="logged-user-friends__friend-img"
      style={{ backgroundImage: `url(${friend?.img})` }}
      onClick={() => history.push(`/users/${friend?.id}`)}
    >
      <span className="logged-user-friends__friend-name">{friend?.name}</span>
    </div>
  ));

  return (
    <div className="global-user-friends">
      <h2 className="global-user-friends__title">{`Znajomi (${renderFriends.length})`}</h2>
      <div className="global-user-friends__friend-wrapper">
        {renderFriends.length ? (
          <>
            {renderFriends}
            <div className="global-user-friends__last-img-margin"></div>
          </>
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
