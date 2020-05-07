import React from "react";
import "./AboutApp.scss";
import { loggedDesc, unloggedDesc } from "./AboutAppDesc";

const { welcomeLogged } = loggedDesc;
const {
  welcomeUnlogged,
  likeSocialMedia,
  letsTestIt,
  login,
  password,
  notSave,
} = unloggedDesc;

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

interface AboutAppProps {
  loggedUser: {
    isLogged: boolean;
    name: string;
  };
}
