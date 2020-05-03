import React from "react";
import "./Board.scss";
import { Message } from "./Message/Message";

export interface BoardProps {}

interface User {
  user: {
    isLogged: boolean;
  };
}

export const Board: React.FC<BoardProps> = () => {
  return (
    <section className="board">
      <Message />
    </section>
  );
};
