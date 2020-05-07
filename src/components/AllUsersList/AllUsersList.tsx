import React from "react";
import "./AllUsersList.scss";
import { useDispatch } from "react-redux";
import { UserToAdd } from "./UserToAdd/UserToAdd";

export const AllUsersList: React.FC<UsersProps> = ({
  loggedUser,
  allUsersList,
}) => {
  const dispatch = useDispatch();
  const getListWithoutLoggedUser = allUsersList.filter(
    (user) => user.id !== loggedUser.id
  );

  const renderUsersList = getListWithoutLoggedUser.map((globalUser) => {
    const isInLoggedUserList = loggedUser.friends.includes(globalUser.id);
    return (
      <UserToAdd
        key={globalUser.id}
        globalUser={globalUser}
        isInLoggedUserList={isInLoggedUserList}
        dispatch={dispatch}
      />
    );
  });

  return <section className="all-users-list">{renderUsersList}</section>;
};

interface UsersProps {
  loggedUser: {
    id: number;
    friends: number[];
  };
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
  }[];
}
