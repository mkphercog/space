import React from "react";
import "./LoginInputs.scss";

export const LoginInputs: React.SFC<LoginInputsProps> = ({
  labelName,
  inputValue,
  setInputValue,
  classModifier = "",
}) => (
  <>
    <label className="login-desk__label">{labelName}</label>
    <input
      className={`login-desk__input ${classModifier}`}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  </>
);

interface LoginInputsProps {
  labelName: string;
  inputValue: string;
  setInputValue: Function;
  classModifier?: string;
}
