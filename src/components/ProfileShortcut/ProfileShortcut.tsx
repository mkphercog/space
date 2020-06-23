import React from "react";
import { useHistory } from "react-router-dom";
import "./ProfileShortcut.scss";

export const ProfileShortcut: React.FC<ProfileShortcutProps> = ({
  loggedUser,
}) => {
  const history = useHistory();
  return (
    <div
      className="profile-shortcut"
      style={{ backgroundImage: `url(${loggedUser.img})` }}
      onClick={() => history.push("/profile/info")}
    >
      <p className="profile-shortcut__name">{loggedUser.name}</p>
    </div>
  );
};

export interface ProfileShortcutProps {
  loggedUser: {
    img: string;
    name: string;
  };
}
