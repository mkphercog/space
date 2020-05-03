import React, { useState } from "react";
import "./LoginDesk.scss";
import ACCOUNTS from "./../../accounts.json";
import { setLoginUser, setUserName } from "./../../store/actions/userAction";
import { useDispatch } from "react-redux";

export interface LoginDeskProps {}

const { accounts } = ACCOUNTS;

const tryToLog = (
  login: string,
  password: string,
  dispatch: Function
): boolean => {
  const getUser = accounts.find((user) => user.login === login);
  if (getUser) dispatch(setUserName(getUser.name));
  return getUser?.password === password;
};

export const LoginDesk: React.SFC<LoginDeskProps> = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  return (
    <section className="login-desk">
      <form
        className="login-desk__wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          const loginResult = tryToLog(loginValue, passwordValue, dispatch);
          if (loginResult) dispatch(setLoginUser(loginResult));
        }}
      >
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
