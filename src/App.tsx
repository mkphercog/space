import React from "react";
import SpaceBG from "./images/space-bg2.jpg";
import "./App.scss";

const SpaceBgImage = { backgroundImage: `url(${SpaceBG})` };

export const App = () => {
  return <div className="App" style={SpaceBgImage}></div>;
};
