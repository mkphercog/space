import React from "react";
import "./Board.scss";
import { Messages } from "./Messages/Messages";
import { NoLogged } from "./NoLogged/NoLogged";
import { AddNewMessage } from "./AddNewMessage/AddNewMessage";

export const Board: React.FC<BoardProps> = ({ loggedUser, allUsersList }) => (
  <section className="board">
    {loggedUser.isLogged ? (
      <>
        <Messages allUsersList={allUsersList} />
        <AddNewMessage loggedUser={loggedUser} />
      </>
    ) : (
      <NoLogged />
    )}
  </section>
);

export interface BoardProps {
  loggedUser: {
    id: number;
    isLogged: boolean;
    img: string;
  };
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
