import { setLoginUser, setUserDetails } from "./../../store/actions/userAction";

export const tryToLog = (
  allUsersList: Users,
  login: string,
  password: string,
  dispatch: Function
): boolean => {
  const findUser = allUsersList.find((user) => user.login === login);
  const isCorrectPassword = findUser?.password === password;
  if (findUser && isCorrectPassword) {
    dispatch(setUserDetails(findUser));
    dispatch(setLoginUser(isCorrectPassword));
  }
  return isCorrectPassword;
};

type Users = {
  login: string;
  password: string;
  id: number;
  isLogged: boolean;
  name: string;
  img: string;
  friends: [];
  details: {
    birthYear: number;
    homeTown: string;
    sex: string;
  };
}[];
