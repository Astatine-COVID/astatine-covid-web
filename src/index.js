import React from "react";
import ReactDOM from "react-dom";

import Firebase, { FirebaseContext } from "./firebase";
import AppRouter from "./routes";

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <AppRouter />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
