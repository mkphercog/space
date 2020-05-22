import React from "react";
import "./GlobalUserImgName.scss";

export const GlobalUserImgName: React.FC<GlobalUserImgNameProps> = ({
  globalUserDetails,
}) => (
  <div className="global-user-img-name">
    <div
      className="global-user-img-name__img"
      style={{
        backgroundImage: `url(${globalUserDetails?.img})`,
      }}
    ></div>
    <h1 className="global-user-img-name__name">{globalUserDetails?.name}</h1>
  </div>
);

interface GlobalUserImgNameProps {
  globalUserDetails: {
    name: string;
    img: string;
  };
}
