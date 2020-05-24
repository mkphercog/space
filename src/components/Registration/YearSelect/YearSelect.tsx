import React from "react";
import "./YearSelect.scss";

export const YearSelect: React.FC<YearSelectProps> = ({
  yearValue,
  setYearValue,
}) => {
  let getYears: number[] = [];
  let renderOptions: JSX.Element[] = [];
  const currentYear = new Date().getFullYear();

  for (let index = currentYear; index >= 1950; index--) {
    getYears.push(index);
  }

  renderOptions = getYears.map((year) => (
    <option key={year} value={year} className="year-select__option">
      {year}
    </option>
  ));
  return (
    <>
      <label className="year-select__label">Rok urodzenia</label>
      <select
        value={yearValue}
        onChange={(e) => setYearValue(e.target.value)}
        className="year-select"
      >
        {renderOptions}
      </select>
    </>
  );
};

interface YearSelectProps {
  yearValue: string;
  setYearValue: Function;
}
