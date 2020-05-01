import React from "react";
import "./AboutApp.scss";

export interface AboutAppProps {}

export const AboutApp: React.FC<AboutAppProps> = () => (
  <section className="about-app">
    <h1 className="about-app__title"> Witaj, Nieznajomy!</h1>
    <p className="about-app__desc">
      Space to przestrzeń dla Ciebie i Twoich znajomych! Zaloguj się aby
      zarządzać listą znajomych, sprawdzić tablicę aktualności czy zareagować na
      komentarz znajomego.
    </p>
    <p className="about-app__desc">
      Aktualnie aplikacja jest swego rodzaju stymulacją prawdziwej strony
      "social media". Chcesz wytestować aplikację? Zaloguj się na konto testowe.
    </p>
    <p className="about-app__desc">Login: test</p>
    <p className="about-app__desc"> Hasło: test</p>
    <p className="about-app__desc">Wszelkie zmiany nie zostaną zapisane.</p>
  </section>
);
