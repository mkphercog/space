import React from "react";
import "./Board.scss";
import { Messages } from "./Messages/Messages";
import { NoLogged } from "./NoLogged/NoLogged";

export const Board: React.FC<BoardProps> = ({ loggedUser, allUsersList }) => (
  <section className="board">
    {loggedUser.isLogged ? (
      <Messages allUsersList={allUsersList} />
    ) : (
      <NoLogged />
    )}
  </section>
);

export interface BoardProps {
  loggedUser: {
    isLogged: boolean;
  };
  allUsersList: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
