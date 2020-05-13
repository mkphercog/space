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
  const [registrationError, setRegistationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("No message");
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
          isLogged: false,
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
        setRegistationError(true);
        setErrorMessage(registrationResult as string);
      }
    } else {
      setRegistationError(true);
      setErrorMessage("Login jest już zajęty!");
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
          classError={registrationError}
          setLoginError={setRegistationError}
        />

        <RegistrationInputs
          labelName="Wyświetlana nazwa"
          inputValue={nameValue}
          setInputValue={setNameValue}
          classError={registrationError}
          setLoginError={setRegistationError}
        />

        <RegistrationInputs
          labelName="Hasło*"
          inputValue={passwordValue}
          setInputValue={setPasswordValue}
          security={true}
          classError={registrationError}
          setLoginError={setRegistationError}
        />
        <p className="registration__info-password">
          *Hasło: minimum 5 znaków i przynajmniej jedna cyfra.
        </p>

        <button className="registration__btn">Zarejestruj się</button>
      </form>
      <p
        className={`registration__error-message ${
          registrationError
            ? "registration__error-message--show"
            : "registration__error-message--hide"
        }`}
      >
        {errorMessage}
      </p>
      <p className="registration__info registration__info--animation">
        Rejestracja działa tylko na daną sesję, po odświeżeniu strony wszelkie
        zmiany zostaną utracone!
      </p>
    </section>
  );
};

export interface RegistrationProps {
  allUsersList: {
    login: string;
  }[];
  lastUserID: number;
}
