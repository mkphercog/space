import { SET_LOGIN_USER, SET_USER_DETAILS } from "./../types";

export const setLoginUser = (isLogged: boolean) => ({
  type: SET_LOGIN_USER,
  isLogged: isLogged,
});

interface User {
  name: string;
  img: string;
  friends: number[];
}

export const setUserDetails = (user: User) => ({
  type: SET_USER_DETAILS,
  name: user.name,
  img: user.img,
  friends: user.friends,
});
