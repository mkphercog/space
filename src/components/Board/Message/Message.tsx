import React from "react";
import "./Message.scss";
import ACCOUNTS from "./../../../accounts.json";

const { accounts } = ACCOUNTS;

export interface MessageProps {}

const messTemp = [
  {
    img: accounts[0].img,
    name: accounts[0].name,
    text:
      "Cześć wsztyskim! Testowa wiadomość, mam nadzieję, że wszystko działa. Miłego eksplorowania. :)",
  },
  {
    img: accounts[1].img,
    name: accounts[1].name,
    text: "Hello! :)",
  },
  {
    img: accounts[5].img,
    name: accounts[5].name,
    text: "Hejo! ;) widać wiadomość?",
  },
  {
    img: accounts[3].img,
    name: accounts[3].name,
    text: "Cześć, ja widzę. :)",
  },
  {
    img: accounts[2].img,
    name: accounts[2].name,
    text: "Yo, ja też. ^^",
  },
  {
    img: accounts[7].img,
    name: accounts[7].name,
    text: "Meow! Meow!",
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

export const Message: React.FC<MessageProps> = () => <>{renderMessages}</>;
