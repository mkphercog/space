import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";
import { usersReducer } from "./usersReducer";
import { messageReducer } from "./messagesReducer";
import { notificationBarReducer } from "./notificationBarReducer";

export const rootReducer = combineReducers({
  menu: menuReducer,
  loggedUser: userReducer,
  allUsers: usersReducer,
  messages: messageReducer,
  notificationBar: notificationBarReducer,
});
