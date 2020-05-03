import React from "react";
import "./Message.scss";
import USERS from "./../../../accounts.json";

const { accounts } = USERS;

export interface MessageProps {}

export const Message: React.FC<MessageProps> = () => {
  return (
    <>
      <div className="message">
        <div className="message__wrapperIMG">
          <div
            className="message__img"
            style={{ backgroundImage: `url(${accounts[2].img})` }}
          ></div>
          <p className="message__user-name">{accounts[2].name}</p>
        </div>
        <p className="message__text">
          Cześć wszystkim, jestem Piggy i to jest mój pierwszy post na tej
          stronie! Co u was słychać?
        </p>
      </div>

      <div className="message">
        <div className="message__wrapperIMG">
          <div
            className="message__img"
            style={{ backgroundImage: `url(${accounts[0].img})` }}
          ></div>
          <p className="message__user-name">{accounts[0].name}</p>
        </div>
        <p className="message__text">
          Testowa wiadomość testowego gościa z testowego konta lalalalall alalal
          lal la la lalallalal lala lla la
        </p>
      </div>

      <div className="message">
        <div className="message__wrapperIMG">
          <div
            className="message__img"
            style={{ backgroundImage: `url(${accounts[5].img})` }}
          ></div>
          <p className="message__user-name">{accounts[5].name}</p>
        </div>
        <p className="message__text">tak</p>
      </div>

      <div className="message">
        <div className="message__wrapperIMG">
          <div
            className="message__img"
            style={{ backgroundImage: `url(${accounts[7].img})` }}
          ></div>
          <p className="message__user-name">{accounts[7].name}</p>
        </div>
        <p className="message__text">Meow</p>
      </div>
    </>
  );
};
