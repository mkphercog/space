import React, { useState } from "react";
import "./LoginDesk.scss";
import ACCOUNTS from "./../../accounts.json";
import { setLoginUser, setUserDetails } from "./../../store/actions/userAction";
import { useDispatch } from "react-redux";

const { accounts } = ACCOUNTS;

export interface LoginDeskProps {}

const tryToLog = (
  login: string,
  password: string,
  dispatch: Function
): boolean => {
  const getUser = accounts.find((user) => user.login === login);
  const correctPassword = getUser?.password === password;
  if (getUser && correctPassword) dispatch(setUserDetails(getUser));
  return correctPassword;
};

export const LoginDesk: React.FC<LoginDeskProps> = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();

  return (
    <section className="login-desk">
      <form
        className="login-desk__wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          const loginResult = tryToLog(loginValue, passwordValue, dispatch);
          if (loginResult) dispatch(setLoginUser(loginResult));
          else {
            setTimeout(() => setLoginError(false), 1500);
            setLoginError(true);
          }
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
      {loginError ? (
        <p className="login-desk__login-error">
          Błąd logowania. Spróbuj ponownie!
        </p>
      ) : null}
    </section>
  );
};
