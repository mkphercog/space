import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddNewMessage.scss";
import { addGlobalMessage } from "./../../../store/actions/messagesAction";
import { setNotificationBar } from "../../../store/actions/notificationBarAction";
import { NotificationColors } from "./../../Notifications/NotificationBar/NotificationBar";

export const AddNewMessage: React.FC<AddNewMessageProps> = ({ loggedUser }) => {
  const dispatch = useDispatch();
  const [messageValue, setMessageValue] = useState("");

  const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    const messageTime = new Date().toLocaleTimeString();
    let messageDate = new Date().toLocaleDateString();
    const dayDotIndex = messageDate.indexOf(".");

    e.preventDefault();

    if (dayDotIndex === 1) messageDate = `0${messageDate}`;

    if (messageValue) {
      const newMessage = {
        userID: loggedUser.id,
        text: messageValue,
        time: messageTime,
        date: messageDate,
      };
      dispatch(addGlobalMessage(newMessage));
      setMessageValue("");
    } else {
      dispatch(setNotificationBar("Wpisz wiadomość.", NotificationColors.red));
    }
  };

  return (
    <div className="add-new-message">
      <div
        className="add-new-message__logged-user-img"
        style={{ backgroundImage: `url(${loggedUser.img})` }}
      ></div>
      <form
        className="add-new-message__form"
        onSubmit={(e) => handleSubmitMessage(e)}
      >
        <input
          className="add-new-message__input"
          placeholder="Wiadomość..."
          type="text"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button className="add-new-message__send-btn">
          <i className="fas fa-space-shuttle add-new-message__send-icon"></i>
        </button>
      </form>
    </div>
  );
};

interface AddNewMessageProps {
  loggedUser: {
    id: number;
    img: string;
  };
}
