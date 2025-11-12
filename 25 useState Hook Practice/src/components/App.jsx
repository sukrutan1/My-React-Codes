import React, { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  let [time, setTime] = useState(currentTime);

  setInterval(updateTime, 1000);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
