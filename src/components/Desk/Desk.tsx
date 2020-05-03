import React from "react";
import "./Desk.scss";
import { Route, Switch } from "react-router-dom";
import { AboutApp } from "./../AboutApp/AboutApp";
import { LoginDesk } from "./../LoginDesk/LoginDesk";

export interface DeskProps {}

export const Desk: React.FC<DeskProps> = () => {
  return (
    <main className="desk">
      <div className="desk__div">
        <Switch>
          <Route path="/" exact component={AboutApp} />
          <Route path="/login" component={LoginDesk} />
        </Switch>
      </div>
    </main>
  );
};
