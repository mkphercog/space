import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Messages.scss";

const scrollDown = () => {
  const messageWrap = document.getElementById("messages__wrapper");

  messageWrap?.scrollTo(0, messageWrap.scrollHeight);
};

export const Messages: React.FC<MessagesProps> = ({ allUsersList }) => {
  const messTemp = useSelector(
    (state: Messages) => state.messages.globalMessages
  );

  useEffect(() => {
    scrollDown();
  });

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

  return (
    <div className="messages__wrapper" id="messages__wrapper">
      {renderMessages}
    </div>
  );
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
    globalMessages: {
      userID: number;
      text: string;
    }[];
  };
}
