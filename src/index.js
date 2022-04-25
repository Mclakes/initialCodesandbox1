import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx";
import pi, { doublePi, triplePi } from "./math.js";
import { add, multiply, subtract, divide } from "./calculator.js";

import "../public/styles.css";

ReactDOM.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
    <App />
  </div>,
  document.getElementById("root")
);
