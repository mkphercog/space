import { ADD_NEW_REGISTRED_USER } from "./../types";

export const addNewRegistredUser = (newUser: NewUser) => ({
  type: ADD_NEW_REGISTRED_USER,
  newUser: newUser,
});

interface NewUser {
  id: number;
  login: string;
  password: string;
  name: string;
  img: string;
  friends: number[];
}
