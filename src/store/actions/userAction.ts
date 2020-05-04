import { SET_LOGIN_USER, SET_USER_DETAILS } from "./../types";

export const setLoginUser = (isLogged: boolean) => ({
  type: SET_LOGIN_USER,
  isLogged: isLogged,
});

export const setUserDetails = ({ id, name, img, friends }: User) => ({
  type: SET_USER_DETAILS,
  id: id,
  name: name,
  img: img,
  friends: friends,
});

interface User {
  id: number;
  name: string;
  img: string;
  friends: number[];
}
