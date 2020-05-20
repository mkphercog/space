import React from "react";
import "./GlobalUserImgName.scss";

export const GlobalUserImgName: React.FC<GlobalUserImgNameProps> = ({
  globalUserDetails,
}) => (
  <div className="global-user-profile__wrapper-name-img">
    <div
      className="global-user-profile__img"
      style={{
        backgroundImage: `url(${globalUserDetails?.img})`,
      }}
    ></div>
    <h1 className="global-user-profile__name">{globalUserDetails?.name}</h1>
  </div>
);

interface GlobalUserImgNameProps {
  globalUserDetails: {
    name: string;
    img: string;
  };
}
