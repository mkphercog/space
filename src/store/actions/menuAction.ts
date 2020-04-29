import { HIDE_MENU, SHOW_MENU } from "./../types";

export const showMenu = () => {
  return {
    type: SHOW_MENU,
    visibility: true,
  };
};

export const hideMenu = () => {
  return {
    type: HIDE_MENU,
    visibility: false,
  };
};
