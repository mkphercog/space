import {} from "./../types";
import TEMP_ACC from "./../../accounts.json";

const INITAL_STATE = TEMP_ACC.accounts;

export const usersReducer = (state = INITAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

interface Action {
  type: string;
}
