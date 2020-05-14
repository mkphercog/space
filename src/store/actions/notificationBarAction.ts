import { SET_NOTIFICATION_BAR, DELETE_NOTIFICATIONS } from "./../types";

export const setNotificationBar = (messageText: string, colorBar: string) => ({
  type: SET_NOTIFICATION_BAR,
  messageText: messageText,
  colorBar: colorBar,
});

export const deleteNotifications = () => ({
  type: DELETE_NOTIFICATIONS,
  notificationList: [],
});
