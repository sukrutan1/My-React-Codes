import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    first: "",
    last: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullName((prev) => {
      if (name === "fName") {
        return {
          first: value,
          last: prev.last,
        };
      } else if (name === "lName") {
        return {
          first: prev.first,
          last: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        {fullName.first} {fullName.last}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
