import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Messages.scss";
import {
  likeMessage,
  dislikeMessage,
  likeMessageDelete,
  dislikeMessageDelete,
} from "./../../../store/actions/messagesAction";
import { setNotificationBar } from "../../../store/actions/notificationBarAction";
import { NotificationColors } from "./../../Notifications/NotificationBar/NotificationBar";

const scrollDown = () => {
  const messageWrap = document.getElementById("messages__wrapper");
  messageWrap?.scrollTo(0, messageWrap.scrollHeight);
};

export const Messages: React.FC<MessagesProps> = ({ allUsersList }) => {
  const dispatch = useDispatch();
  const messTemp = useSelector(
    (state: Messages) => state.messages.globalMessages
  );
  const loggedUserID = useSelector(
    (state: LoggedUserID) => state.loggedUser.id
  );

  useEffect(() => {
    scrollDown();
  }, [messTemp.length]);

  const renderMessages = messTemp.map((mess, index) => (
    <div key={index} className="message">
      <div className="message__wrapperIMG">
        <div
          className="message__img"
          style={{ backgroundImage: `url(${allUsersList[mess.userID].img})` }}
        ></div>
        <p className="message__user-name">{allUsersList[mess.userID].name}</p>
        <p className="message__time-and-date">{`${mess.date} ${mess.time}`}</p>
      </div>
      <p className="message__text">{mess.text}</p>
      <div className="message__likes-dislikes">
        <span className="message__likes">
          <i
            className="fas fa-thumbs-up"
            onClick={() => {
              if (
                !mess.likes.includes(loggedUserID) &&
                !mess.dislikes.includes(loggedUserID)
              ) {
                dispatch(likeMessage(mess.messageID, loggedUserID));
              } else if (mess.likes.includes(loggedUserID)) {
                dispatch(likeMessageDelete(mess.messageID, loggedUserID));
              } else if (mess.dislikes.includes(loggedUserID)) {
                dispatch(
                  setNotificationBar(
                    "Zareagowałeś już negatywnie na tego posta!",
                    NotificationColors.red
                  )
                );
              }
            }}
          ></i>
          {mess.likes.length}
        </span>
        <span className="message__dislikes">
          <i
            className="fas fa-thumbs-down"
            onClick={() => {
              if (
                !mess.likes.includes(loggedUserID) &&
                !mess.dislikes.includes(loggedUserID)
              ) {
                dispatch(dislikeMessage(mess.messageID, loggedUserID));
              } else if (mess.dislikes.includes(loggedUserID)) {
                dispatch(dislikeMessageDelete(mess.messageID, loggedUserID));
              } else if (mess.likes.includes(loggedUserID)) {
                dispatch(
                  setNotificationBar(
                    "Zareagowałeś już pozytywnie na tego posta!",
                    NotificationColors.green
                  )
                );
              }
            }}
          ></i>
          {mess.dislikes.length}
        </span>
      </div>
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
    friends: number[];
  }[];
}

interface Messages {
  messages: {
    globalMessages: {
      messageID: number;
      userID: number;
      text: string;
      time: string;
      date: string;
      likes: number[];
      dislikes: number[];
    }[];
  };
}

interface LoggedUserID {
  loggedUser: {
    id: number;
  };
}
