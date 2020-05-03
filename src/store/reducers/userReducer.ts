import { SET_LOGIN_USER, SET_USER_NAME } from "./../types";

const INITIAL_STATE = {
  isLogged: false,
  name: "Nieznajomy",
};

interface Action {
  type: string;
  isLogged: boolean;
  name: string;
}

export const userReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return {
        ...state,
        isLogged: action.isLogged,
      };
    case SET_USER_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
