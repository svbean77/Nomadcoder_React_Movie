import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import ToDo from "./ToDo";
import Coin from "./Coin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Coin />
  </React.StrictMode>
);
