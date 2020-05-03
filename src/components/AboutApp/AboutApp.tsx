import React from "react";
import "./AboutApp.scss";
import { useSelector } from "react-redux";

export interface AboutAppProps {}

interface User {
  user: {
    name: string;
    isLogged: boolean;
  };
}

export const AboutApp: React.FC<AboutAppProps> = () => {
  const user = useSelector((state: User) => state.user);

  return (
    <section className="about-app">
      <h1 className="about-app__title"> Witaj, {user.name}!</h1>
      <p className="about-app__desc">
        {user.isLogged
          ? "Cieszymy się, że znów jesteś z nami!"
          : "Space to przestrzeń dla Ciebie i Twoich znajomych! Zaloguj się aby zarządzać listą znajomych, sprawdzić tablicę aktualności czy zareagować na komentarz znajomego."}
      </p>
      <p className="about-app__desc">
        Aktualnie aplikacja jest swego rodzaju stymulacją prawdziwej strony
        "social media".
      </p>
      <p className="about-app__desc">
        {user.isLogged
          ? null
          : "Chcesz wytestować aplikację? Zaloguj się na konto testowe."}
      </p>
      <p className="about-app__desc">{user.isLogged ? null : "Login: test"}</p>
      <p className="about-app__desc">{user.isLogged ? null : "Hasło: test"}</p>
      <p className="about-app__desc">Wszelkie zmiany nie zostaną zapisane.</p>
    </section>
  );
};
