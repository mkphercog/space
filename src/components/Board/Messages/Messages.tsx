import React from "react";
import { useSelector } from "react-redux";
import "./Messages.scss";

export const Messages: React.FC<MessagesProps> = ({ allUsersList }) => {
  const messTemp = useSelector((state: Messages) => state.messages);

  const renderMessages = messTemp.map((mess, index) => (
    <div key={index} className="message">
      <div className="message__wrapperIMG">
        <div
          className="message__img"
          style={{ backgroundImage: `url(${allUsersList[mess.userID].img})` }}
        ></div>
        <p className="message__user-name">{allUsersList[mess.userID].name}</p>
      </div>
      <p className="message__text">{mess.text}</p>
    </div>
  ));

  return <>{renderMessages}</>;
};

interface MessagesProps {
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}

interface Messages {
  messages: {
    userID: number;
    text: string;
  }[];
}
