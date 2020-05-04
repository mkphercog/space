import React from "react";
import "./Desk.scss";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { AboutApp } from "./../AboutApp/AboutApp";
import { LoginDesk } from "./../LoginDesk/LoginDesk";
import { Board } from "./../Board/Board";
import { LoggedUserProfile } from "../LoggedUserProfile/LoggedUserProfile";
import { Users } from "./../Users/Users";

export interface DeskProps {}

export const Desk: React.FC<DeskProps> = () => {
  const loggedUser = useSelector((state: User) => state.user);

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
              <LoggedUserProfile loggedUser={loggedUser} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/board" render={() => <Board loggedUser={loggedUser} />} />
        <Route
          path="/users"
          render={() =>
            loggedUser.isLogged ? (
              <Users loggedUser={loggedUser} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            loggedUser.isLogged ? <Redirect to="/" /> : <LoginDesk />
          }
        />
        <Route component={() => <div style={{ color: "white" }}>BŁĄD</div>} />
      </Switch>
    </main>
  );
};

interface User {
  user: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  };
}
