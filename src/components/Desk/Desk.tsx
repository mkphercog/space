import React from "react";
import "./Desk.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { AboutApp } from "./../AboutApp/AboutApp";
import { LoginDesk } from "./../LoginDesk/LoginDesk";
import { useSelector } from "react-redux";

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
      <div className="desk__div">
        <Switch>
          <Route path="/" exact component={AboutApp} />
          <Route
            path="/login"
            render={() => (userIsLogged ? <Redirect to="/" /> : <LoginDesk />)}
          />
        </Switch>
      </div>
    </main>
  );
};
