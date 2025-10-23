import React from "react";

function App() {
  let head = "";
  const currentTime = new Date().getHours;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    head = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    head = "Good Afternoon";
    customStyle.color = "green";
  } else {
    head = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {head}
    </h1>
  );
}

export default App();
