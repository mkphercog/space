import React from "react";
import "./Desk.scss";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { AboutApp } from "./../AboutApp/AboutApp";
import { LoginDesk } from "./../LoginDesk/LoginDesk";
import { Board } from "./../Board/Board";

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
        <Route path="/board" component={Board} />
        <Route
          path="/login"
          render={() => (userIsLogged ? <Redirect to="/" /> : <LoginDesk />)}
        />
        <Route component={() => <div style={{ color: "white" }}>BŁĄD</div>} />
      </Switch>
    </main>
  );
};
