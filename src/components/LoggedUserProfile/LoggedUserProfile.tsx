import React from "react";
import "./LoggedUserProfile.scss";
import { LoggedUserFriends } from "./LoggedUserFriends/LoggedUserFriends";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

export const LoggedUserProfile: React.FC<LoggedUserProfileProps> = ({
  loggedUser,
  allUsersList,
}) => {
  const { birthYear, homeTown, sex } = loggedUser.details;
  const currentYear = new Date().getFullYear();
  const userAge = currentYear - Number(birthYear);
  return (
    <section className="logged-user-profile">
      <div className="logged-user-profile__wrapper-name-img">
        <div
          className="logged-user-profile__img"
          style={{
            backgroundImage: `url(${loggedUser.img})`,
          }}
        ></div>
        <h1 className="logged-user-profile__name">{loggedUser.name}</h1>
      </div>

      <nav className="logged-user-profile__local-nav">
        <NavLink
          className="logged-user-profile__local-nav-link"
          to={`/profile/info`}
        >
          Informacje
        </NavLink>
        <NavLink
          className="logged-user-profile__local-nav-link"
          to={`/profile/friends`}
        >
          {`Znajomi(${loggedUser.friends.length})`}
        </NavLink>
      </nav>
      <Switch>
        <Route
          path={`/profile/info`}
          render={() => (
            <div className="logged-user-profile__details-wrapper">
              <p className="logged-user-profile__details">{`Nazwa: ${loggedUser?.name}`}</p>
              <p className="logged-user-profile__details">{`Wiek: ${userAge}`}</p>
              <p className="logged-user-profile__details">{`Rok urodzenia: ${birthYear}r.`}</p>
              <p className="logged-user-profile__details">{`Miasto: ${homeTown}`}</p>
              <p className="logged-user-profile__details">{`Płeć: ${sex}`}</p>
            </div>
          )}
        />
        <Route
          path={`/profile/friends`}
          render={() => (
            <LoggedUserFriends
              loggedUser={loggedUser}
              allUsersList={allUsersList}
            />
          )}
        />
        <Route render={() => <Redirect to={`/profile/info`} />} />
      </Switch>
    </section>
  );
};

interface LoggedUserProfileProps {
  loggedUser: {
    name: string;
    img: string;
    friends: [];
    details: {
      birthYear: number;
      homeTown: string;
      sex: string;
    };
  };
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
