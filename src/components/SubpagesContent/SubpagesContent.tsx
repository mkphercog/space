import React from "react";
import "./SubpagesContent.scss";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { AboutApp } from "../AboutApp/AboutApp";
import { LoginDesk } from "../LoginDesk/LoginDesk";
import { Board } from "../Board/Board";
import { LoggedUserProfile } from "../LoggedUserProfile/LoggedUserProfile";
import { AllUsersList } from "../AllUsersList/AllUsersList";
import { Registration } from "../Registration/Registration";

export const SubpagesContent: React.FC = () => {
  const loggedUser = useSelector((state: User) => state.loggedUser);
  const allUsers = useSelector((state: Users) => state.allUsers);

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

        <Route component={() => <div style={{ color: "white" }}>BŁĄD</div>} />
      </Switch>
    </main>
  );
};

interface User {
  loggedUser: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  };
}

interface Users {
  allUsers: {
    list: {
      login: string;
      password: string;
      id: number;
      isLogged: boolean;
      name: string;
      img: string;
      friends: [];
    }[];
    lastUserID: number;
  };
}
