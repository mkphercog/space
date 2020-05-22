import { SET_NOTIFICATION_BAR, DELETE_NOTIFICATIONS } from "./../types";
import { NotificationColors } from "./../../components/Notifications/NotificationBar/NotificationBar";

export const setNotificationBar = (
  messageText: string,
  colorBar: NotificationColors
) => ({
  type: SET_NOTIFICATION_BAR,
  messageText: messageText,
  colorBar: colorBar,
});

export const deleteNotifications = () => ({
  type: DELETE_NOTIFICATIONS,
  notificationList: [],
});
