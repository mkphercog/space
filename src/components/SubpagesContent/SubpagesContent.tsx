import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { LoggedUserProfile } from "../LoggedUserProfile/LoggedUserProfile";
import { GlobalUserProfile } from "../GlobalUserProfile/GlobalUserProfile";
import { AllUsersList } from "../AllUsersList/AllUsersList";
import { Registration } from "../Registration/Registration";
import { PathError } from "./../PathError/PathError";
import { LoginDesk } from "../LoginDesk/LoginDesk";
import { AboutApp } from "../AboutApp/AboutApp";
import { Board } from "../Board/Board";

import { updateUsersList } from "./../../store/actions/usersAction";
import { GlobalStateTypes } from "./../../store/interfaces";

import "./SubpagesContent.scss";

export const SubpagesContent: React.FC = () => {
  const state = useSelector((state: GlobalStateTypes) => state);
  const { loggedUser, allUsers } = state;

  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser.id !== -1) {
      let updatedUsersList = allUsers.list.map((user) => {
        if (user.id === loggedUser.id) {
          user.friends = loggedUser.friends;
        }
        return user;
      });

      updatedUsersList = updatedUsersList.map((user) => {
        if (
          user.id === loggedUser.friends[loggedUser.friends.length - 1] &&
          !user.friends.includes(loggedUser.id)
        ) {
          user.friends.push(loggedUser.id);
        } else if (
          user.friends.includes(loggedUser.id) &&
          !loggedUser.friends.includes(user.id)
        ) {
          user.friends = user.friends.filter(
            (friend) => friend !== loggedUser.id
          );
        }

        return user;
      });

      dispatch(updateUsersList(updatedUsersList));
    }
  }, [loggedUser.friends, allUsers.list, dispatch, loggedUser.id]);

  return (
    <main className="desk">
      <Switch>
        <Route
          path="/"
          exact
          render={() => <AboutApp loggedUser={loggedUser} />}
        />

        <Route
          path="/profile"
          render={() =>
            loggedUser.isLogged ? (
              <LoggedUserProfile
                loggedUser={loggedUser}
                allUsersList={allUsers.list}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/board"
          render={() => (
            <Board loggedUser={loggedUser} allUsersList={allUsers.list} />
          )}
        />

        <Route
          exact
          path="/users"
          render={() =>
            loggedUser.isLogged ? (
              <AllUsersList
                loggedUser={loggedUser}
                allUsersList={allUsers.list}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/users/:id"
          render={(props) =>
            loggedUser.isLogged ? (
              <GlobalUserProfile
                params={props.match.params}
                allUsersList={allUsers.list}
                loggedUser={loggedUser}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/login"
          render={() =>
            loggedUser.isLogged ? (
              <Redirect to="/" />
            ) : (
              <LoginDesk allUsersList={allUsers.list} />
            )
          }
        />

        <Route
          path="/registration"
          render={() =>
            loggedUser.isLogged ? (
              <Redirect to="/" />
            ) : (
              <Registration
                allUsersList={allUsers.list}
                lastUserID={allUsers.lastUserID}
              />
            )
          }
        />

        <Route component={PathError} />
      </Switch>
    </main>
  );
};
