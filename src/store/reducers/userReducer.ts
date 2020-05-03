import { SET_LOGIN_USER, SET_USER_DETAILS } from "./../types";

const INITIAL_STATE = {
  isLogged: false,
  name: "Nieznajomy",
  img: "",
  friends: [],
};

interface Action {
  type: string;
  isLogged: boolean;
  name: string;
  img: string;
  friends: number[];
}

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
        name: action.name,
        img: action.img,
        friends: action.friends,
      };
    default:
      return state;
  }
};
