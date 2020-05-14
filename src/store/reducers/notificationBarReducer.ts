import { SET_NOTIFICATION_BAR, DELETE_NOTIFICATIONS } from "./../types";

const INITIAL_STATE = {
  notificationList: [],
};

export const notificationBarReducer = (
  state = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case SET_NOTIFICATION_BAR:
      return {
        ...state,
        notificationList: [
          ...state.notificationList,
          {
            messageText: action.messageText,
            colorBar: action.colorBar,
            animation: action.animation,
          },
        ],
      };
    case DELETE_NOTIFICATIONS:
      return {
        notificationList: action.notificationList,
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  messageText: string;
  colorBar: string;
  animation: boolean;
  notificationList: [];
}
