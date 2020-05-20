import React, { useEffect, useState } from "react";
import "./GlobalUserProfile.scss";
import { useHistory, NavLink, Switch, Route, Redirect } from "react-router-dom";
import { GlobalUserFriends } from "./GlobalUserFriends/GlobalUserFriends";
import { GlobalUserImgName } from "./GlobalUserImgName/GlobalUserImgName";
export const GlobalUserProfile: React.FC<GlobalUserProfileProps> = ({
  params,
  allUsersList,
  loggedUser,
}) => {
  const history = useHistory();
  const [animation, setAnimation] = useState(false);
  const globalUserDetails = allUsersList.find(
    (user) => user.id === Number(params.id)
  );
  const isUserIdGlobal = allUsersList.findIndex(
    (user) => user.id === Number(params.id)
  );
  const currentYear = new Date().getFullYear();
  const { birthYear, homeTown, sex } = globalUserDetails?.details || {};
  const userAge = currentYear - Number(birthYear);

  useEffect(() => {
    if (Number(params.id) === loggedUser.id) history.push("/profile");
    if (isUserIdGlobal === -1) history.push("/users");
    if (!animation) setAnimation(true);
    const timerIndex = setTimeout(() => setAnimation(false), 700);
    return () => clearTimeout(timerIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, loggedUser.id]);

  return (
    <section
      className={`global-user-profile ${
        animation ? "global-user-profile--animation" : ""
      }`}
    >
      <GlobalUserImgName
        globalUserDetails={globalUserDetails || { name: "", img: "" }}
      />

      <nav className="global-user-profile__local-nav">
        <NavLink
          className="global-user-profile__local-nav-link"
          to={`/users/${globalUserDetails?.id}/info`}
        >
          Informacje
        </NavLink>
        <NavLink
          className="global-user-profile__local-nav-link"
          to={`/users/${globalUserDetails?.id}/friends`}
        >
          {`Znajomi(${globalUserDetails?.friends.length})`}
        </NavLink>
      </nav>

      <Switch>
        <Route
          path={`/users/${globalUserDetails?.id}/info`}
          render={() => (
            <div className="global-user-profile__details-wrapper">
              <p className="global-user-profile__details">{`Nazwa: ${globalUserDetails?.name}`}</p>
              <p className="global-user-profile__details">{`Wiek: ${userAge}`}</p>
              <p className="global-user-profile__details">{`Rok urodzenia: ${birthYear}r.`}</p>
              <p className="global-user-profile__details">{`Miasto: ${homeTown}`}</p>
              <p className="global-user-profile__details">{`Płeć: ${sex}`}</p>
            </div>
          )}
        />
        <Route
          path={`/users/${globalUserDetails?.id}/friends`}
          render={() => (
            <GlobalUserFriends
              history={history}
              friendsList={globalUserDetails?.friends || []}
              allUsersList={allUsersList}
            />
          )}
        />
        <Route
          render={() => (
            <Redirect to={`/users/${globalUserDetails?.id}/info`} />
          )}
        />
      </Switch>
    </section>
  );
};

interface GlobalUserProfileProps {
  params: {
    id: string;
  };
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: number[];
    details: {
      birthYear: number;
      homeTown: string;
      sex: string;
    };
  }[];
  loggedUser: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  };
}
