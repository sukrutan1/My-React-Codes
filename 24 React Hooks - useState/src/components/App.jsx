import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
