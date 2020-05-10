import React, { useState } from "react";
import "./LoginDesk.scss";
import { useDispatch } from "react-redux";
import { tryToLog } from "./LoginLogic";
import { LoginInputs } from "./LoginInputs/LoginInputs";
import { NavLink } from "react-router-dom";
import { setNotificationBar } from "./../../store/actions/notificationBarAction";

export const LoginDesk: React.FC<LoginDeskProps> = ({ allUsersList }) => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginResult = tryToLog(
      allUsersList,
      loginValue,
      passwordValue,
      dispatch
    );

    if (!loginResult) {
      dispatch(
        setNotificationBar("Błąd logowania. Spróbuj ponownie.", "red", true)
      );
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
        <LoginInputs
          labelName="Login"
          inputValue={loginValue}
          setInputValue={setLoginValue}
        />
        <LoginInputs
          labelName="Hasło"
          inputValue={passwordValue}
          setInputValue={setPasswordValue}
          classModifier="login-desk__input--security"
        />
        <button className="login-desk__btn">Zaloguj się</button>
      </form>
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
