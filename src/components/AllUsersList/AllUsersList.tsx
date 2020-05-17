import React, { useState } from "react";
import "./AllUsersList.scss";
import { useDispatch } from "react-redux";
import { UserToAdd } from "./UserToAdd/UserToAdd";

export const AllUsersList: React.FC<UsersProps> = ({
  loggedUser,
  allUsersList,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const getListWithoutLoggedUser = allUsersList.filter(
    (user) => user.id !== loggedUser.id
  );

  const filterUsersList = getListWithoutLoggedUser.filter((globalUser) =>
    globalUser.name.toUpperCase().includes(searchValue.toUpperCase())
  );

  const renderUsersList = filterUsersList.map((globalUser) => {
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

  return (
    <section className="all-users-list">
      <input
        className="all-users-list__search"
        type="text"
        placeholder="Wyszukaj..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {renderUsersList.length ? (
        renderUsersList
      ) : (
        <p className="all-users-list__no-result">Brak wyników</p>
      )}
    </section>
  );
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
