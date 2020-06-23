import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import { App } from "./App";
import { store } from "./store";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
