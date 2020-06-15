import {
  ADD_GLOBAL_MESSAGE,
  LIKE_MESSAGE,
  DISLIKE_MESSAGE,
  LIKE_MESSAGE_DELETE,
  DISLIKE_MESSAGE_DELETE,
} from "./../types";

export const addGlobalMessage = (newMessage: NewMessage) => ({
  type: ADD_GLOBAL_MESSAGE,
  newMessage,
});

export const likeMessage = (messageID: number, loggedUserID: number) => ({
  type: LIKE_MESSAGE,
  messageID,
  loggedUserID,
});

export const dislikeMessage = (messageID: number, loggedUserID: number) => ({
  type: DISLIKE_MESSAGE,
  messageID,
  loggedUserID,
});

export const likeMessageDelete = (messageID: number, loggedUserID: number) => ({
  type: LIKE_MESSAGE_DELETE,
  messageID,
  loggedUserID,
});

export const dislikeMessageDelete = (
  messageID: number,
  loggedUserID: number
) => ({
  type: DISLIKE_MESSAGE_DELETE,
  messageID,
  loggedUserID,
});

interface NewMessage {
  messageID: number;
  userID: number;
  text: string;
  time: string;
  date: string;
  likes: number[];
  dislikes: number[];
}
