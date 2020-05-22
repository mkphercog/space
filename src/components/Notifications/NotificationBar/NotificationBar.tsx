import React from "react";
import "./NotificationBar.scss";

export enum NotificationColors {
  green = "green",
  red = "red",
}

export const NotificationBar: React.FC<NotificationBarProps> = ({
  messageText,
  colorBar = NotificationColors.green,
}) => (
  <div
    className={`notification-bar notification-bar--${colorBar} notification-bar--animation`}
  >
    <p className="notification-bar__message">{messageText}</p>
  </div>
);

interface NotificationBarProps {
  messageText: string;
  colorBar: NotificationColors;
}
