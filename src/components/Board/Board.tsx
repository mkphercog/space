import React from "react";
import "./Board.scss";
import { Message } from "./Message/Message";
import { useSelector } from "react-redux";
import { NoLogged } from "./NoLogged/NoLogged";

export interface BoardProps {}

interface User {
  user: {
    isLogged: boolean;
  };
}

export const Board: React.FC<BoardProps> = () => {
  const isLogged = useSelector((state: User) => state.user.isLogged);
  return (
    <section className="board">{isLogged ? <Message /> : <NoLogged />}</section>
  );
};
