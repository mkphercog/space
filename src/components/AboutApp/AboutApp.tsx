import React from "react";
import "./AboutApp.scss";
import {
  welcomeLogged,
  welcomeUnlogged,
  letsTestIt,
  login,
  password,
  likeSocialMedia,
  notSave,
} from "./AboutAppDesc";

export const AboutApp: React.FC<AboutAppProps> = ({ loggedUser }) => (
  <section className="about-app">
    <h1 className="about-app__title"> Witaj, {loggedUser.name}!</h1>
    <p className="about-app__desc">
      {loggedUser.isLogged ? welcomeLogged : welcomeUnlogged}
    </p>
    <p className="about-app__desc">{likeSocialMedia}</p>
    <p className="about-app__desc">{loggedUser.isLogged ? null : letsTestIt}</p>
    <p className="about-app__desc">{loggedUser.isLogged ? null : login}</p>
    <p className="about-app__desc">{loggedUser.isLogged ? null : password}</p>
    <p className="about-app__desc">{notSave}</p>
  </section>
);

export interface AboutAppProps {
  loggedUser: {
    isLogged: boolean;
    name: string;
  };
}
