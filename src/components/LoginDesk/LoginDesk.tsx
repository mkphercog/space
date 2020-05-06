import React, { useState } from "react";
import "./LoginDesk.scss";
import { setLoginUser, setUserDetails } from "./../../store/actions/userAction";
import { useDispatch } from "react-redux";

const tryToLog = (
  users: Users,
  login: string,
  password: string,
  dispatch: Function
): boolean => {
  const getUser = users.find((user) => user.login === login);
  const isCorrectPassword = getUser?.password === password;
  if (getUser && isCorrectPassword) dispatch(setUserDetails(getUser));
  return isCorrectPassword;
};

export const LoginDesk: React.FC<LoginDeskProps> = ({ users }) => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResult = tryToLog(users, loginValue, passwordValue, dispatch);
    if (loginResult) dispatch(setLoginUser(loginResult));
    else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 1500);
    }
  };

  return (
    <section className="login-desk">
      <form
        className="login-desk__wrapper"
        onSubmit={(e) => {
          handleSubmitLogin(e);
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
          className="login-desk__input login-desk__input--security"
          type="text"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button className="login-desk__btn">Zaloguj się</button>
      </form>
      {loginError ? (
        <p className="login-desk__login-error">
          Błąd logowania. Spróbuj ponownie.
        </p>
      ) : null}
    </section>
  );
};

export interface LoginDeskProps {
  users: {
    login: string;
    password: string;
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}

type Users = {
  login: string;
  password: string;
  id: number;
  isLogged: boolean;
  name: string;
  img: string;
  friends: [];
}[];
