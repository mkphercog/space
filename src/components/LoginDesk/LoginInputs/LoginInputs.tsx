import React from "react";
import "./LoginInputs.scss";

export const LoginInputs: React.FC<LoginInputsProps> = ({
  labelName,
  inputValue,
  setInputValue,
  security = false,
  classError = false,
  setLoginError,
}) => (
  <>
    <label className="login-desk__label">{labelName}</label>
    <input
      className={`login-desk__input 
      ${security && "login-desk__input--security"} 
      ${classError && "login-desk__input--error"}`}
      type="text"
      value={inputValue}
      onChange={(e) => {
        if (classError) setLoginError(false);
        setInputValue(e.target.value);
      }}
    />
  </>
);

interface LoginInputsProps {
  labelName: string;
  inputValue: string;
  setInputValue: Function;
  security?: boolean;
  classError?: boolean;
  setLoginError: Function;
}
