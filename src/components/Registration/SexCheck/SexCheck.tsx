import React from "react";
import "./SexCheck.scss";

export const SexCheck: React.FC<SexCheckProps> = ({ sex, setSex }) => (
  <div className="sex-check">
    <p className="sex-check__title">Płeć</p>
    <label className="sex-check__label">
      <input
        className="sex-check__choice"
        type="radio"
        checked={sex === "female"}
        onChange={() => setSex("female")}
      />
      Kobieta
    </label>
    <label className="sex-check__label">
      <input
        className="sex-check__choice"
        type="radio"
        checked={sex === "male"}
        onChange={() => setSex("male")}
      />
      Mężczyzna
    </label>
  </div>
);

interface SexCheckProps {
  sex: string;
  setSex: Function;
}
