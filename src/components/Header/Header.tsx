import React from "react";
import "./Header.scss";
import { Switch, Route } from "react-router-dom";
import {
  SpaceRocketLogo,
  Login,
  Board,
  ErrorPath,
  Profile,
  Registration,
  Users,
} from "./HeaderContent";

export const Header: React.FC = () => (
  <header className="header">
    <Switch>
      <Route path="/" exact component={SpaceRocketLogo} />
      <Route path="/profile" component={Profile} />
      <Route path="/board" component={Board} />
      <Route path="/users" component={Users} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route component={ErrorPath} />
    </Switch>
  </header>
);
