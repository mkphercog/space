import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  NotificationBar,
  NotificationColors,
} from "./NotificationBar/NotificationBar";
import { deleteNotifications } from "./../../store/actions/notificationBarAction";

import "./Notifications.scss";

export const Notifications: React.FC<NotificationsProps> = ({
  notificationList,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (notificationList.length > 0) {
      const timeIndex = setTimeout(() => {
        dispatch(deleteNotifications());
      }, 2500);
      return () => clearTimeout(timeIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationList.length]);

  const renderNotifications = notificationList.map(
    ({ messageText, colorBar }, index) => (
      <NotificationBar
        key={index}
        messageText={messageText}
        colorBar={colorBar}
      />
    )
  );

  return <div className="notifications">{renderNotifications}</div>;
};

interface NotificationsProps {
  notificationList: {
    messageText: string;
    colorBar: NotificationColors;
    animation: boolean;
  }[];
}
