import React, { useEffect } from "react";
import "./NotificationBar.scss";
import { useDispatch } from "react-redux";
import { setNotificationBar } from "./../../store/actions/notificationBarAction";

export const NotificationBar: React.FC<NotificationBarProps> = ({
  message,
  colorBar,
  animation,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(
      () => dispatch(setNotificationBar("", "green", false)),
      1800
    );
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animation]);

  return (
    <div
      className={`notification-bar notification-bar--${colorBar} notification-bar--${
        animation ? "animation" : ""
      }`}
    >
      <p className="notification-bar__message">{message}</p>
    </div>
  );
};

export interface NotificationBarProps {
  message: string;
  colorBar: string;
  animation: boolean;
}
