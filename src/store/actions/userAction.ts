import { SET_LOGIN_USER, SET_USER_NAME } from "./../types";

export const setLoginUser = (isLogged: boolean) => ({
  type: SET_LOGIN_USER,
  isLogged: isLogged,
});

export const setUserName = (name: string) => ({
  type: SET_USER_NAME,
  name: name,
});
