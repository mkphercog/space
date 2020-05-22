import React, { useEffect, useState } from "react";
import "./GlobalUserProfile.scss";
import { useHistory, Switch, Route, Redirect } from "react-router-dom";
import { GlobalUserFriends } from "./GlobalUserFriends/GlobalUserFriends";
import { GlobalUserImgName } from "./GlobalUserImgName/GlobalUserImgName";
import { GlobalUserLocalNav } from "./GlobalUserLocalNav/GlobalUserLocalNav";
import { useDispatch } from "react-redux";

export const GlobalUserProfile: React.FC<GlobalUserProfileProps> = ({
  params,
  allUsersList,
  loggedUser,
}) => {
  const [animation, setAnimation] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const globalUserDetails = allUsersList.find(
    (user) => user.id === Number(params.id)
  );
  const isUserIdGlobal = allUsersList.findIndex(
    (user) => user.id === Number(params.id)
  );
  const { birthYear, homeTown, sex } = globalUserDetails?.details || {};
  const currentYear = new Date().getFullYear();
  const userAge = currentYear - Number(birthYear);
  const isInFriendLoggedUser =
    loggedUser.friends.findIndex(
      (friend) => friend === globalUserDetails?.id
    ) === -1
      ? false
      : true;

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
      <GlobalUserLocalNav
        dispatch={dispatch}
        globalUserDetails={
          globalUserDetails || { id: -1, name: "", friends: [] }
        }
        isInFriendLoggedUser={isInFriendLoggedUser}
      />

      <Switch>
        <Route
          path={`/users/${globalUserDetails?.id}/info`}
          render={() => {
            return isInFriendLoggedUser ? (
              <div className="global-user-profile__details-wrapper">
                <p className="global-user-profile__details">{`Nazwa: ${globalUserDetails?.name}`}</p>
                <p className="global-user-profile__details">{`Wiek: ${userAge}`}</p>
                <p className="global-user-profile__details">{`Rok urodzenia: ${birthYear}r.`}</p>
                <p className="global-user-profile__details">{`Miasto: ${homeTown}`}</p>
                <p className="global-user-profile__details">{`Płeć: ${sex}`}</p>
              </div>
            ) : (
              <span className="global-user-profile__details-no-friend">
                {`Ta sekcja nie jest dostępna, ponieważ Ty i ${globalUserDetails?.name} nie jesteście znajomymi.`}
              </span>
            );
          }}
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
    friends: number[];
  };
}
