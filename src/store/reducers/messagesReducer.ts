import {} from "./../types";
import TEMP_MESS from "./../../messages.json";

const INITAL_STATE = TEMP_MESS.messages;

export const messageReducer = (state = INITAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

interface Action {
  type: string;
}
