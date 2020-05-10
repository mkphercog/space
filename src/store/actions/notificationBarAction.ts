import { SET_NOTIFICATION_BAR } from "./../types";

export const setNotificationBar = (
  message: string,
  colorBar: string,
  animation: boolean
) => ({
  type: SET_NOTIFICATION_BAR,
  message: message,
  colorBar: colorBar,
  animation: animation,
});
