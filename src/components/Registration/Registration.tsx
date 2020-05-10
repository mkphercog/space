import React, { useState } from "react";
import "./Registration.scss";
import { RegistrationInputs } from "./RegistrationInputs/RegistrationInputs";
import { useDispatch } from "react-redux";
import { addNewRegistredUser } from "./../../store/actions/usersAction";
import DefaultIMG from "./../../images/astronaut.png";
import { setLoginUser, setUserDetails } from "./../../store/actions/userAction";
import { validation } from "./RegistrationLogic";

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
        const newID = lastUserID + 1;
        const newUser = {
          id: newID,
          login: loginValue,
          password: passwordValue,
          name: nameValue,
          img: DefaultIMG,
          friends: [],
        };
        dispatch(addNewRegistredUser(newUser));
        alert("Dziękujemy za rejestrację, miłego explorowania!");
        dispatch(setUserDetails(newUser));
        dispatch(setLoginUser(true));
      } else {
        alert(registrationResult);
      }
    } else {
      alert("Login jest już zajęty!");
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
          zmiany nie zostaną zapisane!
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
