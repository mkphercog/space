import React from "react";
import "./PathError.scss";
import { useHistory } from "react-router-dom";

export const PathError: React.FC = () => {
  const pathHistory = useHistory();
  return (
    <div className="path-error">
      <p className="path-error__desc">Error</p>
      <div
        className="path-error__image"
        style={{
          backgroundImage: `url(https://media.giphy.com/media/7lsw8RenVcjCM/source.gif)`,
        }}
      ></div>
      <button className="path-error__btn" onClick={() => pathHistory.push("/")}>
        Wróć do strony głównej
      </button>
    </div>
  );
};
