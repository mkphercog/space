import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  menu: menuReducer,
  loggedUser: userReducer,
  users: usersReducer,
});
