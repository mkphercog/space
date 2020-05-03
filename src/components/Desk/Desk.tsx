import React from "react";
import "./Desk.scss";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { AboutApp } from "./../AboutApp/AboutApp";
import { LoginDesk } from "./../LoginDesk/LoginDesk";
import { Board } from "./../Board/Board";
import LoggedUserProfile from "../LoggedUserProfile/LoggedUserProfile";

export interface DeskProps {}

interface User {
  user: {
    isLogged: boolean;
  };
}

export const Desk: React.FC<DeskProps> = () => {
  const userIsLogged = useSelector((state: User) => state.user.isLogged);

  return (
    <main className="desk">
      <Switch>
        <Route path="/" exact component={AboutApp} />
        <Route
          path="/profile"
          render={() =>
            userIsLogged ? <LoggedUserProfile /> : <Redirect to="/login" />
          }
        />
        <Route path="/board" component={Board} />
        <Route
          path="/users"
          render={() => (userIsLogged ? null : <Redirect to="/login" />)}
        />
        <Route
          path="/login"
          render={() => (userIsLogged ? <Redirect to="/" /> : <LoginDesk />)}
        />
        <Route component={() => <div style={{ color: "white" }}>BŁĄD</div>} />
      </Switch>
    </main>
  );
};
