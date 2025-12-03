import React, { useState } from "react";

function App() {
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClicked() {
    console.log("clicked");
    setTitle("Hello " + name);
  }
  const [name, setName] = useState("");
  const [title, setTitle] = useState("Hello");
  return (
    <div className="container">
      <h1>{title}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleClicked}>Submit</button>
    </div>
  );
}

export default App;
