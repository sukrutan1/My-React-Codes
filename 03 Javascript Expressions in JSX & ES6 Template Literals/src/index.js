import React from "react";
import ReactDOM from "react-dom";

const fname = "Sukru";
const lname = "Tan";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>Your lucky number: {num}</p>
  </div>,
  document.getElementById("root")
);
