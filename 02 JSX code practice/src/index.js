//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite colors</h1>
    <ul>
      <h2>
        <li>Purple</li>
        <li>Blue</li>
        <li>Black</li>
      </h2>
    </ul>
  </div>,
  document.getElementById("root")
);
