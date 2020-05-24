import React, { useState } from "react";
import "./Registration.scss";
import { RegistrationInputs } from "./RegistrationInputs/RegistrationInputs";
import { useDispatch } from "react-redux";
import { addNewRegistredUser } from "./../../store/actions/usersAction";
import { setLoginUser, setUserDetails } from "./../../store/actions/userAction";
import { profileSketchs, validation } from "./RegistrationLogic";
import { setNotificationBar } from "./../../store/actions/notificationBarAction";
import { NotificationColors } from "./../Notifications/NotificationBar/NotificationBar";
import { YearSelect } from "./YearSelect/YearSelect";
import { Prompt } from "react-router-dom";
import { SexCheck } from "./SexCheck/SexCheck";

export const Registration: React.FC<RegistrationProps> = ({
  allUsersList,
  lastUserID,
}) => {
  const [loginValue, setLoginValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [registrationError, setRegistationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("No error");
  const [registrationLoad, setRegistrationLoad] = useState(false);
  const [yearValue, setYearValue] = useState("2000");
  const [sex, setSex] = useState("female");
  const [homeTown, setHomeTown] = useState("Warszawa");
  const dispatch = useDispatch();

  if (registrationError && !registrationLoad) setRegistrationLoad(true);

  const handleSubmitRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registrationResult = validation(
      loginValue,
      nameValue,
      passwordValue,
      homeTown
    );
    const isLoginUsed = allUsersList.findIndex(
      (user) => user.login === loginValue
    );
    if (isLoginUsed === -1) {
      if (registrationResult === true) {
        const sketchIndex = Math.floor(Math.random() * profileSketchs.length);
        const newID = lastUserID + 1;
        const userSex = sex === "female" ? "kobieta" : "mężczyzna";
        const newUser = {
          id: newID,
          login: loginValue,
          password: passwordValue,
          isLogged: false,
          name: nameValue,
          img: profileSketchs[sketchIndex],
          friends: [],
          details: {
            birthYear: Number(yearValue),
            homeTown: homeTown,
            sex: userSex,
          },
        };
        dispatch(addNewRegistredUser(newUser));
        dispatch(
          setNotificationBar(
            "Dziękujemy za rejestrację, miłego explorowania!",
            NotificationColors.green
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
    <>
      <Prompt
        when={loginValue || nameValue || passwordValue ? true : false}
        message={"Zmiany nie zostaną zapisane, mimo to przejść dalej?"}
      />
      <section className="registration">
        <form
          className="registration__form-wrapper"
          onSubmit={(e) => handleSubmitRegistration(e)}
        >
          <RegistrationInputs
            labelName="Login"
            inputValue={loginValue}
            setInputValue={setLoginValue}
            registrationError={registrationError}
            setLoginError={setRegistationError}
          />

          <RegistrationInputs
            labelName="Wyświetlana nazwa"
            inputValue={nameValue}
            setInputValue={setNameValue}
            registrationError={registrationError}
            setLoginError={setRegistationError}
          />

          <RegistrationInputs
            labelName="Hasło*"
            inputValue={passwordValue}
            setInputValue={setPasswordValue}
            security={true}
            registrationError={registrationError}
            setLoginError={setRegistationError}
          />
          <p className="registration__info-password">
            *Hasło: minimum 5 znaków i przynajmniej jedna cyfra.
          </p>

          <SexCheck sex={sex} setSex={setSex} />
          <YearSelect yearValue={yearValue} setYearValue={setYearValue} />
          <RegistrationInputs
            labelName="Miasto"
            inputValue={homeTown}
            setInputValue={setHomeTown}
            registrationError={registrationError}
            setLoginError={setRegistationError}
          />
          <button className="registration__btn">Zarejestruj się</button>
        </form>
        <p
          className={`registration__error-message ${
            registrationError
              ? "registration__error-message--show"
              : registrationLoad
              ? "registration__error-message--hide"
              : ""
          }`}
        >
          {errorMessage}
        </p>
        <p className="registration__info registration__info--animation">
          Rejestracja działa tylko na daną sesję, po odświeżeniu strony wszelkie
          zmiany zostaną utracone!
        </p>
      </section>
    </>
  );
};

export interface RegistrationProps {
  allUsersList: {
    login: string;
  }[];
  lastUserID: number;
}
