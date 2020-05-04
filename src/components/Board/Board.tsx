import React from "react";
import "./Board.scss";
import { Message } from "./Message/Message";
import { NoLogged } from "./NoLogged/NoLogged";

export const Board: React.FC<BoardProps> = ({ loggedUser }) => (
  <section className="board">
    {loggedUser.isLogged ? <Message /> : <NoLogged />}
  </section>
);

export interface BoardProps {
  loggedUser: {
    isLogged: boolean;
  };
}
