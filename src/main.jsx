import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./components/SecondCounter";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

let counter = 0;

setInterval(function () {
  counter++;

  root.render(<SecondsCounter seconds={counter} />);
}, 1000);
