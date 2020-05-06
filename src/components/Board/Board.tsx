import React from "react";
import "./Board.scss";
import { Message } from "./Message/Message";
import { NoLogged } from "./NoLogged/NoLogged";

export const Board: React.FC<BoardProps> = ({ loggedUser, users }) => (
  <section className="board">
    {loggedUser.isLogged ? <Message users={users} /> : <NoLogged />}
  </section>
);

export interface BoardProps {
  loggedUser: {
    isLogged: boolean;
  };

  users: {
    id: number;
    isLogged: boolean;
    name: string;
    img: string;
    friends: [];
  }[];
}
