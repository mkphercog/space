import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddNewMessage.scss";
import { addGlobalMessage } from "./../../../store/actions/messagesAction";

export const AddNewMessage: React.FC<AddNewMessageProps> = ({ loggedUser }) => {
  const dispatch = useDispatch();
  const [messageValue, setMessageValue] = useState("");

  const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (messageValue) {
      const newMessage = { userID: loggedUser.id, text: messageValue };
      dispatch(addGlobalMessage(newMessage));
      setMessageValue("");
    } else {
      alert("Wpisz coś ! potem wyskakujące okienko jak przy dodaniu znajomych");
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
