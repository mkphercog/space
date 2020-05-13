import React from "react";
import "./RegistrationInputs.scss";

export const RegistrationInputs: React.FC<RegistrationInputsProps> = ({
  labelName,
  inputValue,
  setInputValue,
  security = false,
  classError = false,
  setLoginError,
}) => (
  <>
    <label className="registration__label">{labelName}</label>
    <input
      className={`registration__input       
      ${security && "registration__input--security"} 
      ${classError && "registration__input--error"}`}
      type="text"
      value={inputValue}
      onChange={(e) => {
        if (classError) setLoginError(false);
        setInputValue(e.target.value);
      }}
    />
  </>
);

interface RegistrationInputsProps {
  labelName: string;
  inputValue: string;
  setInputValue: Function;
  classModifier?: string;
  security?: boolean;
  classError?: boolean;
  setLoginError: Function;
}
