import React, { useState } from "react";
import "./LoginDesk.scss";
import { useDispatch } from "react-redux";
import { tryToLog } from "./LoginLogic";
import { LoginInputs } from "./LoginInputs/LoginInputs";
import { NavLink } from "react-router-dom";

export const LoginDesk: React.FC<LoginDeskProps> = ({ allUsersList }) => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loginLoad, setLoginLoad] = useState(false);
  const dispatch = useDispatch();

  if (loginError && !loginLoad) setLoginLoad(true);

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResult = tryToLog(
      allUsersList,
      loginValue,
      passwordValue,
      dispatch
    );
    setLoginError(!loginResult);
  };

  return (
    <section className="login-desk">
      <form
        className="login-desk__wrapper"
        onSubmit={(e) => {
          handleSubmitLogin(e);
        }}
      >
        <LoginInputs
          labelName="Login"
          inputValue={loginValue}
          setInputValue={setLoginValue}
          classError={loginError}
          setLoginError={setLoginError}
        />
        <LoginInputs
          labelName="Hasło"
          inputValue={passwordValue}
          setInputValue={setPasswordValue}
          security={true}
          classError={loginError}
          setLoginError={setLoginError}
        />
        <button className="login-desk__btn">Zaloguj się</button>
      </form>
      <p
        className={`login-desk__error-message ${
          loginError
            ? "login-desk__error-message--show"
            : loginLoad
            ? "login-desk__error-message--hide"
            : ""
        }`}
      >
        Błąd logowania, spróbuj ponownie.
      </p>
      <NavLink className="login-desk__registration-link" to="/registration">
        Nie masz konta? Zarejestruj się tutaj.
      </NavLink>
    </section>
  );
};

export interface LoginDeskProps {
  allUsersList: {
    login: string;
    password: string;
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
