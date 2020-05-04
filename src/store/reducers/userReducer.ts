import { SET_LOGIN_USER, SET_USER_DETAILS } from "./../types";

const INITIAL_STATE = {
  id: 0,
  isLogged: false,
  name: "Nieznajomy",
  img: "",
  friends: [],
};

export const userReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return {
        ...state,
        isLogged: action.isLogged,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        id: action.id,
        name: action.name,
        img: action.img,
        friends: action.friends,
      };
    default:
      return state;
  }
};

interface Action {
  type: string;
  id: number;
  isLogged: boolean;
  name: string;
  img: string;
  friends: number[];
}
