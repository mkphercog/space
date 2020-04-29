import { HIDE_MENU, SHOW_MENU } from "./../types";

const INITIAL_STATE = {
  visibility: false,
};

interface Action {
  type: string;
  visibility: boolean;
}

export const menuReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SHOW_MENU:
      return { ...state, visibility: action.visibility };
    case HIDE_MENU:
      return { ...state, visibility: action.visibility };
    default:
      return state;
  }
};
