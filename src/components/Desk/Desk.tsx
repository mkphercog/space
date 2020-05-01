import React from "react";
import "./Desk.scss";
import { Route } from "react-router-dom";
import { AboutApp } from "./../AboutApp/AboutApp";

export interface DeskProps {}

export const Desk: React.FC<DeskProps> = () => {
  return (
    <main className="desk">
      <div className="desk__div">
        <Route path="/about" component={AboutApp} />
      </div>
    </main>
  );
};
