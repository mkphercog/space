import React, { useState } from "react";
import "./LoginDesk.scss";

export interface LoginDeskProps {}

export const LoginDesk: React.SFC<LoginDeskProps> = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <section className="login-desk">
      <form className="login-desk__wrapper">
        <label className="login-desk__label">Login</label>
        <input
          className="login-desk__input"
          type="text"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <label className="login-desk__label">Hasło</label>
        <input
          className="login-desk__input"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button className="login-desk__btn">Zaloguj się</button>
      </form>
    </section>
  );
};
