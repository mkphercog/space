import { ADD_GLOBAL_MESSAGE } from "./../types";
import TEMP_MESS from "./../../messages.json";

const INITAL_STATE = {
  globalMessages: TEMP_MESS.messages,
};

export const messageReducer = (state = INITAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_GLOBAL_MESSAGE:
      return {
        ...state,
        globalMessages: [...state.globalMessages, action.newMessage],
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  newMessage: {
    userID: number;
    text: string;
    time: string;
    date: string;
  };
}
