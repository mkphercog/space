import { ADD_GLOBAL_MESSAGE } from "./../types";

export const addGlobalMessage = (newMessage: NewMessage) => ({
  type: ADD_GLOBAL_MESSAGE,
  newMessage: newMessage,
});

interface NewMessage {
  userID: number;
  text: string;
}
