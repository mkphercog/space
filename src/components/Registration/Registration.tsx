import React, { useState } from "react";
import "./Registration.scss";
import { RegistrationInputs } from "./RegistrationInputs/RegistrationInputs";
import { useDispatch } from "react-redux";
import { addNewRegistredUser } from "./../../store/actions/usersAction";
import { setLoginUser, setUserDetails } from "./../../store/actions/userAction";
import { profileSketchs, validation } from "./RegistrationLogic";
import { setNotificationBar } from "./../../store/actions/notificationBarAction";

export const Registration: React.FC<RegistrationProps> = ({
  allUsersList,
  lastUserID,
}) => {
  const [loginValue, setLoginValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmitRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registrationResult = validation(loginValue, nameValue, passwordValue);
    const isLoginUsed = allUsersList.findIndex(
      (user) => user.login === loginValue
    );
    if (isLoginUsed === -1) {
      if (registrationResult === true) {
        const sketchIndex = Math.floor(Math.random() * profileSketchs.length);
        const newID = lastUserID + 1;
        const newUser = {
          id: newID,
          login: loginValue,
          password: passwordValue,
          name: nameValue,
          img: profileSketchs[sketchIndex],
          friends: [],
        };
        dispatch(addNewRegistredUser(newUser));
        dispatch(
          setNotificationBar(
            "Dziękujemy za rejestrację, miłego explorowania!",
            "green",
            true
          )
        );
        dispatch(setUserDetails(newUser));
        dispatch(setLoginUser(true));
      } else {
        dispatch(setNotificationBar(registrationResult as string, "red", true));
      }
    } else {
      dispatch(setNotificationBar("Login jest już zajęty!", "red", true));
    }
  };

  return (
    <section className="registration">
      <form
        className="registration__form-wrapper"
        onSubmit={(e) => handleSubmitRegistration(e)}
      >
        <RegistrationInputs
          labelName="Login"
          inputValue={loginValue}
          setInputValue={setLoginValue}
        />

        <RegistrationInputs
          labelName="Wyświetlana nazwa"
          inputValue={nameValue}
          setInputValue={setNameValue}
        />

        <RegistrationInputs
          labelName="Hasło"
          inputValue={passwordValue}
          setInputValue={setPasswordValue}
          classModifier="registration__input--security"
        />

        <button className="registration__btn">Zarejestruj się</button>

        <p className="registration__info">
          Rejestracja działa tylko na daną sesję, po odświeżeniu strony wszelkie
          zmiany zostaną utracone!
        </p>
      </form>
    </section>
  );
};

export interface RegistrationProps {
  allUsersList: {
    login: string;
  }[];
  lastUserID: number;
}
