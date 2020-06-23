import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NotificationColors } from "./../../Notifications/NotificationBar/NotificationBar";
import { addGlobalMessage } from "./../../../store/actions/messagesAction";
import { setNotificationBar } from "../../../store/actions/notificationBarAction";
import { GlobalStateTypes } from "./../../../store/interfaces";

import "./AddNewMessage.scss";

export const AddNewMessage: React.FC<AddNewMessageProps> = ({ loggedUser }) => {
  const [messageValue, setMessageValue] = useState("");
  const lastMessageID = useSelector(
    (state: GlobalStateTypes) => state.messages.lastMessageID
  );
  const dispatch = useDispatch();

  const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    const messageTime = new Date().toLocaleTimeString();
    let messageDate = new Date().toLocaleDateString();
    const dayDotIndex = messageDate.indexOf(".");

    e.preventDefault();

    if (dayDotIndex === 1) messageDate = `0${messageDate}`;

    if (messageValue) {
      const newMessage: newMessage = {
        messageID: lastMessageID + 1,
        userID: loggedUser.id,
        text: messageValue,
        time: messageTime,
        date: messageDate,
        likes: [],
        dislikes: [],
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

interface newMessage {
  messageID: number;
  userID: number;
  text: string;
  time: string;
  date: string;
  likes: number[];
  dislikes: number[];
}
