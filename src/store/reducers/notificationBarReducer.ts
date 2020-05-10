import { SET_NOTIFICATION_BAR } from "./../types";

const INITIAL_STATE = {
  message: "",
  colorBar: "green",
  animation: false,
};

export const notificationBarReducer = (
  state = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case SET_NOTIFICATION_BAR:
      return {
        ...state,
        message: action.message,
        colorBar: action.colorBar,
        animation: action.animation,
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  message: string;
  colorBar: string;
  animation: boolean;
}
