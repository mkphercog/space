import React from "react";
import "./Message.scss";

export const Message: React.FC<MessageProps> = ({ users }) => {
  const messTemp = [
    {
      img: users[0].img,
      name: users[0].name,
      text:
        "Cześć wsztyskim! Testowa wiadomość, mam nadzieję, że wszystko działa. Miłego eksplorowania. :)",
    },
    {
      img: users[1].img,
      name: users[1].name,
      text: "Hello! :)",
    },
  ];

  const renderMessages = messTemp.map((mess, index) => (
    <div key={index} className="message">
      <div className="message__wrapperIMG">
        <div
          className="message__img"
          style={{ backgroundImage: `url(${mess.img})` }}
        ></div>
        <p className="message__user-name">{mess.name}</p>
      </div>
      <p className="message__text">{mess.text}</p>
    </div>
  ));

  return <>{renderMessages}</>;
};

export interface MessageProps {
  users: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
