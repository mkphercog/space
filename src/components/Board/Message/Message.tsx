import React from "react";
import "./Message.scss";
import Piggy from "./../../../images/usersImage/piggy.jpg";
import USERS from "./../../../accounts.json";

const { accounts } = USERS;

export interface MessageProps {}

export const Message: React.FC<MessageProps> = () => {
  return (
    <>
      <div className="message">
        <div className="message__wrapperIMG">
          <img className="message__img" src={Piggy} alt="UserImg" />
          <p className="message__text message__text--bold">
            {accounts[2].name}
          </p>
        </div>
        <p className="message__text">
          Cześć wszystkim, jestem Piggy i to jest mój pierwszy post na tej
          stronie! Co u was słychać?
        </p>
      </div>
      <div className="message">
        <div className="message__wrapperIMG">
          <img className="message__img" src={Piggy} alt="UserImg" />
          <p className="message__text message__text--bold">
            {accounts[0].name}
          </p>
        </div>
        <p className="message__text">
          Testowa wiadomość testowego gościa z testowego konta lalalalall alalal
          lal la la lalallalal lala lla l
        </p>
      </div>
    </>
  );
};
