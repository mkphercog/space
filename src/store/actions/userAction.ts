import {
  SET_LOGIN_USER,
  SET_USER_DETAILS,
  ADD_USER_TO_FRIENDS,
} from "./../types";

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

export const addUserToFriends = (newFriendID: number) => ({
  type: ADD_USER_TO_FRIENDS,
  newFriendID: newFriendID,
});

interface User {
  id: number;
  name: string;
  img: string;
  friends: number[];
}
