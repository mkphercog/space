import {
  SET_LOGIN_USER,
  SET_USER_DETAILS,
  RESET_USER_DETAILS,
  ADD_USER_TO_FRIENDS,
  DELETE_USER_FROM_FRIENDS,
} from "./../types";

export const setLoginUser = (isLogged: boolean) => ({
  type: SET_LOGIN_USER,
  isLogged: isLogged,
});

export const setUserDetails = ({ id, name, img, friends, details }: User) => ({
  type: SET_USER_DETAILS,
  id: id,
  name: name,
  img: img,
  friends: friends,
  birthYear: details.birthYear,
  homeTown: details.homeTown,
  sex: details.sex,
});

export const resetUserDetails = () => ({
  type: RESET_USER_DETAILS,
});

export const addUserToFriends = (newFriendID: number) => ({
  type: ADD_USER_TO_FRIENDS,
  newFriendID: newFriendID,
});

export const deleteUserFromFriends = (friendToDeleteID: number = -1) => ({
  type: DELETE_USER_FROM_FRIENDS,
  friendToDeleteID: friendToDeleteID,
});

interface User {
  id: number;
  name: string;
  img: string;
  friends: number[];
  details: {
    birthYear: number;
    homeTown: string;
    sex: string;
  };
}
