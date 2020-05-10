import { ADD_NEW_REGISTRED_USER } from "./../types";
import TEMP_ACC from "./../../accounts.json";

const INITAL_STATE = {
  list: TEMP_ACC.accounts,
  lastUserID: TEMP_ACC.accounts.length - 1,
};

export const usersReducer = (state = INITAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_NEW_REGISTRED_USER:
      return {
        ...state,
        list: [...state.list, action.newUser],
        lastUserID: action.newUser.id,
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  newUser: {
    id: number;
    login: string;
    password: string;
    name: string;
    img: string;
    friends: number[];
  };
}
