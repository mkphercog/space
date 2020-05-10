import React from "react";
import "./RegistrationInputs.scss";

export const RegistrationInputs: React.FC<RegistrationInputsProps> = ({
  labelName,
  inputValue,
  setInputValue,
  classModifier = "",
}) => (
  <>
    <label className="registration__label">{labelName}</label>
    <input
      className={`registration__input ${classModifier}`}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  </>
);

interface RegistrationInputsProps {
  labelName: string;
  inputValue: string;
  setInputValue: Function;
  classModifier?: string;
}
