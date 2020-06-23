import { NotificationColors } from "./../../components/Notifications/NotificationBar/NotificationBar";

export interface GlobalStateTypes {
  menu: {
    visibility: boolean;
  };

  loggedUser: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: number[];
    details: {
      birthYear: number;
      homeTown: string;
      sex: string;
    };
  };

  allUsers: {
    list: {
      id: number;
      login: string;
      password: string;
      isLogged: boolean;
      name: string;
      img: string;
      friends: number[];
      details: {
        birthYear: number;
        homeTown: string;
        sex: string;
      };
    }[];
    lastUserID: number;
  };

  messages: {
    globalMessages: {
      messageID: number;
      userID: number;
      text: string;
      time: string;
      date: string;
      likes: number[];
      dislikes: number[];
    }[];
    lastMessageID: number;
  };

  notificationBar: {
    notificationList: {
      messageText: string;
      colorBar: NotificationColors;
      animation: boolean;
    }[];
  };
}
