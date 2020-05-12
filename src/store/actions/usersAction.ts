import { ADD_NEW_REGISTRED_USER, UPDATE_USERS_LIST } from "./../types";

export const addNewRegistredUser = (newUser: NewUser) => ({
  type: ADD_NEW_REGISTRED_USER,
  newUser: newUser,
});

export const updateUsersList = (list: NewUser[]) => ({
  type: UPDATE_USERS_LIST,
  list: list,
});

interface NewUser {
  login: string;
  password: string;
  id: number;
  isLogged: boolean;
  name: string;
  img: string;
  friends: number[];
}
