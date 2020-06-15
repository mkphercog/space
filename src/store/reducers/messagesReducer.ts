import {
  ADD_GLOBAL_MESSAGE,
  LIKE_MESSAGE,
  DISLIKE_MESSAGE,
  LIKE_MESSAGE_DELETE,
  DISLIKE_MESSAGE_DELETE,
} from "./../types";
import TEMP_MESS from "./../../messages.json";

const INITAL_STATE = {
  globalMessages: TEMP_MESS.messages,
  lastMessageID: TEMP_MESS.messages.length,
};

export const messageReducer = (state = INITAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_GLOBAL_MESSAGE:
      return {
        ...state,
        globalMessages: [...state.globalMessages, action.newMessage],
        lastMessageID: action.newMessage.messageID,
      };

    case LIKE_MESSAGE: {
      const likedMess = state.globalMessages.map((mess) => {
        if (mess.messageID === action.messageID)
          mess.likes.push(action.loggedUserID);
        return mess;
      });
      return {
        ...state,
        globalMessages: likedMess,
      };
    }

    case LIKE_MESSAGE_DELETE: {
      const likedMessDelete = state.globalMessages.map((mess) => {
        if (mess.messageID === action.messageID)
          mess.likes = mess.likes.filter(
            (like) => like !== action.loggedUserID
          );
        return mess;
      });
      return {
        ...state,
        globalMessages: likedMessDelete,
      };
    }

    case DISLIKE_MESSAGE: {
      const dislikedMess = state.globalMessages.map((mess) => {
        if (mess.messageID === action.messageID)
          mess.dislikes.push(action.loggedUserID);
        return mess;
      });
      return {
        ...state,
        globalMessages: dislikedMess,
      };
    }

    case DISLIKE_MESSAGE_DELETE: {
      const dislikedMessDelete = state.globalMessages.map((mess) => {
        if (mess.messageID === action.messageID)
          mess.dislikes = mess.dislikes.filter(
            (dislike) => dislike !== action.loggedUserID
          );
        return mess;
      });
      return {
        ...state,
        globalMessages: dislikedMessDelete,
      };
    }

    default:
      return state;
  }
};

interface Action {
  type: string;
  newMessage: {
    messageID: number;
    userID: number;
    text: string;
    time: string;
    date: string;
    likes: number[];
    dislikes: number[];
  };
  messageID: number;
  loggedUserID: number;
}
