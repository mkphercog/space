import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";
import { usersReducer } from "./usersReducer";
import { messageReducer } from "./messagesReducer";

export const rootReducer = combineReducers({
  menu: menuReducer,
  loggedUser: userReducer,
  allUsersList: usersReducer,
  messages: messageReducer,
});
